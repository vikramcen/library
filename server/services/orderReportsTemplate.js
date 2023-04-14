const moment = require("moment");

module.exports = (orders) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Order Report</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
        }
  
        h1 {
          text-align: center;
          color: #333;
        }
  
        table {
          margin: auto;
          border-collapse: collapse;
          width: 95%;
          background-color: #fff;
          box-shadow: 0px 5px 5px #ccc;
        }
  
        th,
        td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
  
        tr:hover {
          background-color: #f5f5f5;
        }
  
        .total {
          font-weight: bold;
          text-align: right;
          padding-right: 12px;
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Order Report</h1>

      ${orders?.map(
        (order) =>
          `<table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Book Name</th>
            <th>Order Date</th>
            <th>Order Type</th>
            <th>Order Total</th>
          </tr>
        </thead>
        <tbody>

        ${Object.keys(order?.books)?.map(
          (key) =>
            `<tr>
            <td>${order?._id}</td>
            <td>${order?.user?.firstName} ${order?.user?.lastName}</td>
            <td>${order?.books[key]?.item?.title}</td>
            <td>${moment(Number(order?.orderDate)).format("MMM Do YY")}</td>
            <td>${order?.books[key]?.type?.toUpperCase()}</td>
            <td class="total">$${order?.books[key]?.price}</td>
          </tr>`
        )}

        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="total">Total:</td>
            <td class="total">$${order?.totalPrice}</td>
          </tr>
        </tfoot>
      </table>
      <br />`
      )}

    </body>
  </html>
  `;
};
