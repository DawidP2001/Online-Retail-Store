function Footer() {
  return (
    <footer className="footer w-full border-t border-gray-300 h-full grid grid-cols-5 gap-4 text-left">
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Italia Attire</h2>
            <a href="#">About Us</a>
            <a href="#">Store Locator</a>
            <a href="#">Available jobs</a>
            <a href="#">Press</a>
            <a href="#">Affiliate</a>
            <a href="#">Student discount</a>
            <a href="#">Newsletter subscription</a>
            <a href="#">Key Worker Discount</a>
        </div>
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Help</h2>
            <a href="#">Track order</a>
            <a href="#">FAQ</a>
            <a href="#">Delivery methods</a>
            <a href="#">Return & refund policy</a>
            <a href="#">Payments</a>
            <a href="#">Black Friday FAQ</a>
        </div>
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Legal</h2>
            <a href="#">Privacy notice</a>
            <a href="#">Cookie notice</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Terms of service</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookie settings</a>
        </div>
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Socials</h2>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
        </div>
        <div className="flex justify-start items-start flex-row p-5 space-x-10">
            <div>
                <svg width="24" height="16" viewBox="0 0 24 16" className="inline-block" aria-label="Irish flag">
                    <rect width="8" height="16" x="0" y="0" fill="#169B62"/>
                    <rect width="8" height="16" x="8" y="0" fill="#fff"/>
                    <rect width="8" height="16" x="16" y="0" fill="#FF883E"/>
                </svg>
                <span className="px-2">Ireland</span>
            </div>
            <div>Log in</div>
        </div>
    </footer>
  );
}   

export default Footer; 