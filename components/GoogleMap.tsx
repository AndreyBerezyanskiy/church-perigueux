import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full h-[700px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436.1184318740888!2d0.72689499028742!3d45.17829025669997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff71f1226c1875%3A0xc2d99df62bc57dc3!2s%C3%89glise%20Baptiste%20de%20P%C3%A9rigueux!5e0!3m2!1sen!2sfr!4v1759693887858!5m2!1sen!2sfr" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
