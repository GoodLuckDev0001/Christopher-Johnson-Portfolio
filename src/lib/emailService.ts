// Email service for portfolio contact form
// This service uses EmailJS for direct email delivery

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export class EmailService {
  private static readonly GMAIL_ADDRESS = 'mashmovie58@gmail.com';

  // EmailJS configuration
  private static readonly EMAILJS_SERVICE_ID = 'service_evz2a4i';
  private static readonly EMAILJS_TEMPLATE_ID = 'template_z4jeawa';
  private static readonly EMAILJS_USER_ID = '4RyCUvLGpCexHqNyo';

  /**
   * Primary method: Uses EmailJS for direct email delivery
   * This is the recommended method for production use
   */
  static async sendEmail(data: ContactFormData): Promise<{ success: boolean; method: string; error?: string }> {
    try {
      // Validate form data
      if (!data.name || !data.email || !data.message) {
        return {
          success: false,
          method: 'Validation',
          error: 'Please fill in all required fields'
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return {
          success: false,
          method: 'Validation',
          error: 'Please enter a valid email address'
        };
      }

      // Try EmailJS first
      const emailjsResult = await this.sendViaEmailJS(data);
      if (emailjsResult.success) {
        return { success: true, method: 'EmailJS' };
      }

      // Fallback to mailto if EmailJS fails
      console.warn('EmailJS failed, falling back to mailto:', emailjsResult.error);
      return { success: true, method: 'Mailto (Fallback)', error: 'Opening email client as fallback' };

    } catch (error) {
      console.error('Email sending error:', error);
      return {
        success: false,
        method: 'Error',
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Method 1: EmailJS integration (primary method)
   * Sends emails directly to your Gmail inbox
   */
  static async sendViaEmailJS(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Check if EmailJS is loaded
      if (typeof window === 'undefined' || !(window as any).emailjs) {
        return {
          success: false,
          error: 'EmailJS not loaded. Please check if the script is included.'
        };
      }

      const templateParams = {
        to_email: this.GMAIL_ADDRESS,
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        subject: `Portfolio Contact from ${data.name}`,
      };

      // Send email using EmailJS
      const result = await (window as any).emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_USER_ID
      );

      if (result.status === 200) {
        return { success: true };
      } else {
        return {
          success: false,
          error: `EmailJS error: ${result.status} - ${result.text}`
        };
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'EmailJS error occurred'
      };
    }
  }

  /**
   * Method 2: Enhanced mailto link (fallback)
   * Creates a sophisticated mailto link that opens the user's email client
   */
  static createMailtoLink(data: ContactFormData): string {
    const subject = `Portfolio Contact from ${data.name}`;
    const body = `Hello,

You have received a new message from your portfolio website:

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This message was sent from your portfolio contact form.
Please respond directly to: ${data.email}

Best regards,
${data.name}`;

    return `mailto:${this.GMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  /**
   * Get the current configuration status
   */
  static getConfigStatus(): { emailjs: boolean; fallback: boolean } {
    return {
      emailjs: typeof window !== 'undefined' && !!(window as any).emailjs,
      fallback: true, // Mailto fallback is always available
    };
  }
}
