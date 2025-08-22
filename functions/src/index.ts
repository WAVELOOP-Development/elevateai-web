import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import { Resend } from "resend";

// Load environment variables for local development
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Set global options
setGlobalOptions({ maxInstances: 10 });

export const contact = onRequest(
  {
    cors: true,
  },
  async (request, response) => {
    // Initialize Resend with environment variable
    // For local development, use .env file or process.env
    // For production, Firebase will inject the environment variable
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      response.status(500).json({ error: "Server configuration error" });
      return;
    }

    const resend = new Resend(apiKey);
    if (request.method !== "POST") {
      response.status(405).json({ error: "Method not allowed" });
      return;
    }

    try {
      const { f_name, l_name, email, phone, message, company } = request.body;

      // Log incoming request for debugging
      console.log("Received contact form submission:", {
        f_name,
        l_name,
        email,
        phone,
        company,
        message
      });

      // Validate required fields
      if (!f_name || !l_name || !email) {
        response.status(400).json({ error: "Missing required fields" });
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        response.status(400).json({ error: "Invalid email address" });
        return;
      }

      // Sanitize inputs to prevent XSS
      const sanitizedFName = f_name.replace(/[<>]/g, "");
      const sanitizedLName = l_name.replace(/[<>]/g, "");
      const sanitizedFullName = `${sanitizedFName} ${sanitizedLName}`;
      const sanitizedEmail = email.trim();
      const sanitizedPhone = phone ? phone.replace(/[<>]/g, "") : "Not provided";
      const sanitizedCompany = request.body.company ? request.body.company.replace(/[<>]/g, "") : "Not specified";
      const sanitizedMessage = message ? message.replace(/[<>]/g, "") : "Not specified";

      // Get current date and time
      const currentDate = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC",
      });

      const emailTemplate = `
       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #e2e8f0; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a;">
            <div style="background-color: #1e293b; padding: 30px; border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);">
                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #409DDE;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Contact Form Submission</h1>
                    <p style="color: #60a5fa; margin: 4px 0 0 0; font-size: 14px;">Received on ${currentDate}</p>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #334155; border-left: 4px solid #409DDE; border-radius: 6px; border: 1px solid #475569;">
                        <span style="font-weight: 600; color: #60a5fa; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Client Name</span>
                        <p style="color: #e2e8f0; font-size: 16px; margin: 0;">${sanitizedFullName}</p>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #334155; border-left: 4px solid #409DDE; border-radius: 6px; border: 1px solid #475569;">
                        <span style="font-weight: 600; color: #60a5fa; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</span>
                        <p style="color: #e2e8f0; font-size: 16px; margin: 0;">${sanitizedEmail}</p>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #334155; border-left: 4px solid #409DDE; border-radius: 6px; border: 1px solid #475569;">
                        <span style="font-weight: 600; color: #60a5fa; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</span>
                        <p style="color: #e2e8f0; font-size: 16px; margin: 0;">${sanitizedPhone}</p>
                    </div>

                     <div style="margin-bottom: 15px; padding: 15px; background-color: #334155; border-left: 4px solid #409DDE; border-radius: 6px; border: 1px solid #475569;">
                        <span style="font-weight: 600; color: #60a5fa; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company Name</span>
                        <p style="color: #e2e8f0; font-size: 16px; margin: 0;">${sanitizedCompany}</p>
                    </div>
                    
                </div>
                
                <div style="height: 3px; background: linear-gradient(to right, #409DDE, #60a5fa, #29468a); margin: 20px 0; border-radius: 2px; box-shadow: 0 2px 8px rgba(65, 159, 225, 0.3);"></div>
                
                <div style="background-color: #1e293b; padding: 20px; border-radius: 8px; border: 2px solid #409DDE; box-shadow: 0 4px 15px rgba(65, 159, 225, 0.2);">
                    <span style="font-weight: 600; color: #60a5fa; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Project Details</span>
                    <p style="color: #cbd5e1; font-size: 16px; margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569; color: #94a3b8; font-size: 14px;">
                    <p style="margin: 0;">ElevateAI official website contact section</p>
                </div>
            </div>
        </div>
      `;

      const userEmailTemplate = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #e2e8f0; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 20px;">
            <div style="background-color: #1e293b; margin: 20px; padding: 40px 30px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
                <div style="text-align: center;">
                    <div style="width: fit-content; display: inline-block; padding: 20px; background: linear-gradient(135deg, #419FE1 0%, #29468a 100%); border-radius: 12px; margin-bottom: 20px; ">
                        <div style="width: 50%; display: flex; justify-content: center; margin: auto;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/elevateai-solutions.firebasestorage.app/o/Logo%2Ftext-white.png?alt=media&token=4595857e-e22f-473e-96fb-c5d08c903ba4" style="width: 100%; min-width: 200px" alt="logo">
                        </div>
                    </div>
                </div>

                <div style="text-align: center; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 2px solid #419FE1;">
                    <h2 style="color: #60a5fa; margin: 0; line-height: 1.3; font-size: 24px; font-weight: 600;">Thank You for Reaching Out!</h2>
                    <p style="color: #419FE1; margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">Your AI transformation journey begins here</p>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <p style="color: #e2e8f0; font-size: 16px; margin-bottom: 18px; font-weight: 500;">Dear ${sanitizedFullName},</p>

                    <p style="color: #cbd5e1; font-size: 16px; margin-bottom: 18px; line-height: 1.7;">Thank you for your interest in ElevateAI Solutions! We've successfully received your inquiry about AI automation and are excited to help transform your business operations.</p>
                    
                    <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border: 2px solid #419FE1; margin: 25px 0; text-align: center; box-shadow: 0 4px 15px rgba(65, 159, 225, 0.2);">
                        <div style="margin-bottom: 15px;">
                            <div style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(135deg, #419FE1 0%, #29468a 100%); border-radius: 50%; margin-bottom: 10px; position: relative; box-shadow: 0 4px 15px rgba(65, 159, 225, 0.4);">
                                <span style="color: #ffffff; font-size: 24px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">✓</span>
                            </div>
                        </div>
                        <p style="color: #60a5fa; font-size: 18px; margin: 0; font-weight: 600;">Inquiry Successfully Received</p>
                        <p style="color: #94a3b8; font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">Our AI specialists will review your requirements</p>
                    </div>
                    
                    <p style="color: #cbd5e1; font-size: 16px; margin-bottom: 18px; line-height: 1.7;">Our team of AI experts is currently analyzing your project requirements and will provide you with a comprehensive solution proposal within <strong style="color: #60a5fa;">12 - 24 hours</strong>.</p>
                    
                    <p style="color: #cbd5e1; font-size: 16px; margin-bottom: 18px; line-height: 1.7;">In the meantime, feel free to explore our <a href="#" style="color: #419FE1; text-decoration: none; font-weight: 600; border-bottom: 1px solid #419FE1;">case studies</a> to see how we've helped businesses like yours achieve remarkable results through AI automation.</p>
                </div>
                
                <div style="height: 3px; background: linear-gradient(to right, #419FE1, #60a5fa, #29468a); margin: 30px 0; border-radius: 2px; box-shadow: 0 2px 8px rgba(65, 159, 225, 0.3);"></div>
                
                <div style="background: linear-gradient(135deg, #334155 0%, #475569 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #419FE1; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);">
                    <h3 style="color: #60a5fa; font-size: 16px; font-weight: 700; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1px;">Get in Touch</h3>
                    <div>
                        <p style="color: #e2e8f0; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center;">
                            <span style="display: inline-block; width: 20px; margin-right: 10px;">📧</span>
                            <a href="mailto:hello@elevateai.com" style="color: #419FE1; text-decoration: none; font-weight: 500;">elevateai@waveloop.dev</a>
                        </p>
                        <p style="color: #e2e8f0; font-size: 15px; margin: 0; display: flex; align-items: center;">
                            <span style="display: inline-block; width: 20px; margin-right: 10px;">🌐</span>
                            <a href="#" style="color: #419FE1; text-decoration: none; font-weight: 500;">elevateai.waveloop.dev</a>
                        </p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 35px; padding-top: 25px; border-top: 1px solid #475569;">
                    <p style="color: #94a3b8; font-size: 14px; margin: 0 0 10px 0;">Empowering businesses with intelligent AI solutions</p>
                    <p style="color: #e2e8f0; font-size: 18px; font-weight: 700; margin: 0;">
                        Best regards,<br>
                        <span style="background: linear-gradient(135deg, #419FE1 0%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #419FE1;">ElevateAI Solutions Team</span>
                    </p>
                </div>
                
            </div>
        </div>
      `;

      // Send email using Resend
      const emailPayload: any = {
        from: "ElevateAI Contact Form <info@waveloop.dev>",
        to: ["elevateai@waveloop.dev"],
        subject: `New Project Inquiry from ${sanitizedFullName}`,
        html: emailTemplate,
        replyTo: sanitizedEmail,
      };

      const userEmailPayload: any = {
        from: "ElevateAI Contact Form Submission <elevateai@waveloop.dev>",
        to: [sanitizedEmail],
        subject: `Thank You for Staying Connected with Us - ${sanitizedFullName}`,
        html: userEmailTemplate,
        replyTo: "elevateai@waveloop.dev",
      };

      console.log("Sending email with Resend...");
      let emailError = null;
      let userEmailError = null;
      try {
        const data = await resend.emails.send(emailPayload);
        console.log("Email sent successfully:", data);
        // Send confirmation email to the user
        console.log("Sending confirmation email to user...");
        try {
          const userEmailData = await resend.emails.send(userEmailPayload);
          console.log("User confirmation email sent successfully:", userEmailData);
        } catch (err) {
          userEmailError = err;
          console.error("Failed to send user confirmation email:", userEmailError);
          // Don't fail the main request if user email fails
        }
      } catch (err) {
        emailError = err;
        console.error("Resend API error:", emailError);
      }
      // Send response to client
      if (emailError) {
        response.status(500).json({ error: "Failed to send admin email" });
      } else {
        response.status(200).json({ success: true, message: "Emails sent successfully", userEmailError: userEmailError ? String(userEmailError) : undefined });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      response.status(500).json({
        error: "Failed to send email",
      });
    }
  }
);

// {
//   "f_name" : "Navindu",
//   "l_name" : "Ashen",
//   "email" : "navinduinfo158@gmail.com",
//   "phone" : "",
//   "company" : "",
//   "message" : ""
// }

// https://us-central1-elevateai-solutions.cloudfunctions.net/contact


export const consultation = onRequest(
  {
    cors: true,
  },
  async (request, response) => {
    // Initialize Resend with environment variable
    // For local development, use .env file or process.env
    // For production, Firebase will inject the environment variable
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      response.status(500).json({ error: "Server configuration error" });
      return;
    }

    const resend = new Resend(apiKey);
    if (request.method !== "POST") {
      response.status(405).json({ error: "Method not allowed" });
      return;
    }

    try {
      const { name, email } = request.body;

      // Log incoming request for debugging
      console.log("Received contact form submission:", {
        name,
        email
      });

      // Validate required fields
      if (!name || !email) {
        response.status(400).json({ error: "Missing required fields" });
        return;
      }

      // Sanitize inputs
      const sanitizedName = name.trim();

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        response.status(400).json({ error: "Invalid email address" });
        return;
      }

      const sanitizedEmail = email.trim();

      // Get current date and time
      const currentDate = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC",
      });

      const emailTemplate = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #e2e8f0; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a;">
            <div style="background-color: #1e293b; padding: 30px; border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);">
                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #409DDE;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Free Consultation Request</h1>
                    <p style="color: #60a5fa; margin: 4px 0 0 0; font-size: 14px;">Received on ${currentDate}</p>
                </div>
                <div style="margin-bottom: 25px;">                    
                    <div style="margin-bottom: 15px; padding: 15px; background-color: #334155; border-left: 4px solid #409DDE; border-radius: 6px; border: 1px solid #475569;">
                        <span style="font-weight: 600; color: #60a5fa; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</span>
                        <p style="color: #e2e8f0; font-size: 16px; margin: 0;">${sanitizedEmail}</p>
                    </div>                    
                </div>
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569; color: #94a3b8; font-size: 14px;">
                    <p style="margin: 0;">ElevateAI official website contact section</p>
                </div>
            </div>
        </div>
      `;

      const userEmailTemplate = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #e2e8f0; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 16px;">
            <div style="background-color: #1e293b; padding: 40px 30px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
                <div style="text-align: center;">
                    <div style="width: fit-content; display: inline-block; padding: 20px; background: linear-gradient(135deg, #419FE1 0%, #29468a 100%); border-radius: 12px; margin-bottom: 20px; ">
                        <div style="width: 100%; display: flex; justify-content: center; margin: auto;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/elevateai-solutions.firebasestorage.app/o/Logo%2Flogo-std-H.png?alt=media&token=d587eb0b-d248-4d96-9b23-4afecfd48fbf" style="width: 100%; max-width: 300px;" alt="logo">
                        </div>
                    </div>
                </div>

                <div style="text-align: center; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 2px solid #419FE1;">
                    <h2 style="color: #60a5fa; margin: 0; line-height: 1.3; font-size: 24px; font-weight: 600;">Thank You for Your Consultation Request!</h2>
                    <p style="color: #419FE1; margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">We'll be in touch to schedule your consultation</p>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <p style="color: #e2e8f0; font-size: 16px; margin-bottom: 18px; font-weight: 500;">Dear ${sanitizedName},</p>

                    <p style="color: #cbd5e1; font-size: 16px; margin-bottom: 18px; line-height: 1.7;">Thank you for submitting your consultation form! We've successfully received your request for a consultation about AI automation solutions and are excited to help transform your business operations.</p>
                    
                    <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border: 2px solid #419FE1; margin: 25px 0; text-align: center; box-shadow: 0 4px 15px rgba(65, 159, 225, 0.2);">
                        <div style="margin-bottom: 15px;">
                            <div style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(135deg, #419FE1 0%, #29468a 100%); border-radius: 50%; margin-bottom: 10px; position: relative; box-shadow: 0 4px 15px rgba(65, 159, 225, 0.4);">
                                <span style="color: #ffffff; font-size: 24px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">✓</span>
                            </div>
                        </div>
                        <p style="color: #60a5fa; font-size: 18px; margin: 0; font-weight: 600;">Consultation Form Successfully Submitted</p>
                        <p style="color: #94a3b8; font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">We'll contact you soon to schedule your consultation</p>
                    </div>
                    
                    <p style="color: #cbd5e1; font-size: 16px; margin-bottom: 18px; line-height: 1.7;">Our team will contact you as soon as possible to schedule your consultation session. We'll discuss your specific requirements and how our AI solutions can benefit your business within <strong style="color: #60a5fa;">the next 24 hours</strong>.</p>
                    
                </div>
                
                <div style="height: 3px; background: linear-gradient(to right, #419FE1, #60a5fa, #29468a); margin: 30px 0; border-radius: 2px; box-shadow: 0 2px 8px rgba(65, 159, 225, 0.3);"></div>
                
                    <h3 style="color: #60a5fa; font-size: 16px; font-weight: 700; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1px;">Get in Touch</h3>
                    <div>
                        <p style="color: #e2e8f0; font-size: 15px; margin-bottom: 4px; display: flex; align-items: center;">
                            <a href="mailto:hello@elevateai.com" style="color: #419FE1; text-decoration: none; font-weight: 500;">elevateai@waveloop.dev</a>
                        </p>
                        <p style="color: #e2e8f0; font-size: 15px; margin: 0; display: flex; align-items: center;">
                            <a href="#" style="color: #419FE1; text-decoration: none; font-weight: 500;">elevateai.waveloop.dev</a>
                        </p>
                </div>
                
                <div style="text-align: center; margin-top: 35px; padding-top: 25px; border-top: 1px solid #475569;">
                    <p style="color: #94a3b8; font-size: 14px; margin: 0 0 10px 0;">Empowering businesses with intelligent AI solutions</p>
                    <p style="color: #e2e8f0; font-size: 18px; font-weight: 700; margin: 0;">
                        Best regards,<br>
                        <span style="background: linear-gradient(135deg, #419FE1 0%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #419FE1;">ElevateAI Solutions Team</span>
                    </p>
                </div>
                
            </div>
        </div>
      `;

      // Send email using Resend
      const emailPayload: any = {
        from: "ElevateAI Free Consultation <info@waveloop.dev>",
        to: ["elevateai@waveloop.dev"],
        subject: `Free Consultation Request ${sanitizedName}`,
        html: emailTemplate,
        replyTo: sanitizedEmail,
      };

      const userEmailPayload: any = {
        from: "ElevateAI Free Consultation Request <elevateai@waveloop.dev>",
        to: [sanitizedEmail],
        subject: `Thank You for Staying Connected with Us - ${sanitizedName}`,
        html: userEmailTemplate,
        replyTo: "elevateai@waveloop.dev",
      };

      console.log("Sending email with Resend...");
      let emailError = null;
      let userEmailError = null;
      try {
        const data = await resend.emails.send(emailPayload);
        console.log("Email sent successfully:", data);
        // Send confirmation email to the user
        console.log("Sending confirmation email to user...");
        try {
          const userEmailData = await resend.emails.send(userEmailPayload);
          console.log("User confirmation email sent successfully:", userEmailData);
        } catch (err) {
          userEmailError = err;
          console.error("Failed to send user confirmation email:", userEmailError);
          // Don't fail the main request if user email fails
        }
      } catch (err) {
        emailError = err;
        console.error("Resend API error:", emailError);
      }
      // Send response to client
      if (emailError) {
        response.status(500).json({ error: "Failed to send admin email" });
      } else {
        response.status(200).json({ success: true, message: "Emails sent successfully", userEmailError: userEmailError ? String(userEmailError) : undefined });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      response.status(500).json({
        error: "Failed to send email",
      });
    }
  }
);