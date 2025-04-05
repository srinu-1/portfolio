declare module '@emailjs/browser' {
  interface EmailJSResponse {
    status: number;
    text: string;
  }

  interface EmailJSOptions {
    publicKey: string;
    blockHeadless?: boolean;
    limitRate?: {
      id?: string;
      throttle?: number;
    };
  }

  interface EmailJSSendOptions {
    serviceId: string;
    templateId: string;
    templateParams?: Record<string, unknown>;
    publicKey?: string;
  }

  const emailjs: {
    init: (options: EmailJSOptions | string) => void;
    send: (
      serviceId: string,
      templateId: string,
      templateParams?: Record<string, unknown>,
      publicKey?: string
    ) => Promise<EmailJSResponse>;
  };

  export default emailjs;
} 