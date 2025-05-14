import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await emailjs.send(
      'service_y3iktik',
      'template_j8qpg4r',
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Jihad Mahfouz',
        reply_to: data.email,
      },
      'YVAy9Jhiz77-4ZxJb'
    );
    return response;
  } catch (error) {
    throw new Error('Failed to send email');
  }
};