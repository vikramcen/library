module.exports = ({ name, email, phone, message }) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Contact Us</title>
      <style>
        /* Reset Styles */
        body,
        body * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        /* Global Styles */
        body {
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f6f6f6;
        }
        /* Wrapper Styles */
        .wrapper {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }
        /* Header Styles */
        .header {
          padding: 20px;
          text-align: center;
          background-color: #4caf50;
          color: #ffffff;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        /* Content Styles */
        .content {
          padding: 20px;
        }
        .content p {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .content ul {
          list-style: none;
          padding-left: 0;
        }
        .content ul li {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 10px;
        }
        /* Footer Styles */
        .footer {
          padding: 20px;
          text-align: center;
          background-color: #f6f6f6;
          font-size: 14px;
          color: #555555;
        }
        .footer p {
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>Contact Us</h1>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>
            Thank you for contacting us. We will get back to you as soon as
            possible.
          </p>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
            <li>
              Message: ${message}
            </li>
          </ul>
        </div>
        <div class="footer">
          <p>Thank you,</p>
          <p>The Contact Us Team</p>
        </div>
      </div>
    </body>
  </html>
  `;
};
