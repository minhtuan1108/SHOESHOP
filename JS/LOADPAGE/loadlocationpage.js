function innerLocationPage(){
    var map = `
            <div class="map">
                <h1><i class="fa-solid fa-map"></i>Address</h1>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.273207875388!2d106.61676371460538!3d10.713397992364312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d5b6dd8ea7f%3A0x31d22e7d4e84c046!2zOTkgQW4gRC4gVsawxqFuZywgUGjGsOG7nW5nIDE2LCBRdeG6rW4gOCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1666253890040!5m2!1sen!2s" 
                    allowfullscreen=""
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>`;
    document.querySelector('#content').innerHTML = map;
}