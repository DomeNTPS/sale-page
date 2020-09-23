import React from 'react'

function services() {
    return (
      <div>
        <div className="service">บริการ</div>
        <div className="customer-service">Customer Service</div>
        <div className="service-icon">
          <div className="icon">
            <img
              src="/dashboard.svg"
              alt=""
              height={230}
              style={{ marginLeft: 90, marginTop: 40 }}
            />
            <div className="icon-text">Dashboard for Monitoring</div>
          </div>
          <div className="icon">
            <img
              src="/result.svg"
              alt=""
              height={230}
              style={{ marginLeft: 90, marginTop: 40 }}
            />
            <div className="icon-text">Export results with Excel/PDF file</div>
          </div>
          <div className="icon">
            <img
              src="/callservice.svg"
              alt=""
              height={230}
              style={{ marginLeft: 90, marginTop: 40 }}
            />
            <div className="icon-text">24 hour support</div>
          </div>
        </div>
      </div>
    );
}

export default services
