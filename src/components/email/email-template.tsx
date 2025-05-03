import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  serviceInterest,
  message,
}) => (
  <div
    style={{
      fontFamily: 'Helvetica, Arial, sans-serif',
      backgroundColor: '#f4f4f7',
      padding: '40px 20px',
      color: '#333',
    }}
  >
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '30px',
      }}
    >
      <h1 style={{ color: '#1a1a1a', fontSize: '24px', marginBottom: '20px' }}>
        📨TO JABAL BUILDER'S
      </h1>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '20px',
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600 }}>👤 Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600 }}>📧 Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600 }}>📞 Phone:</td>
            <td>{phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600 }}>🛠️ Service:</td>
            <td>{serviceInterest || 'N/A'}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>💬 Message:</h3>
        <p
          style={{
            backgroundColor: '#f9f9f9',
            padding: '15px',
            borderRadius: '5px',
            whiteSpace: 'pre-line',
            border: '1px solid #ddd',
          }}
        >
          {message}
        </p>
      </div>

      <footer
        style={{
          fontSize: '12px',
          color: '#777',
          borderTop: '1px solid #eaeaea',
          paddingTop: '20px',
        }}
      >
        Sent from the contact form on <strong>Jabal Builders</strong>.
      </footer>
    </div>
  </div>
);

export default EmailTemplate;
