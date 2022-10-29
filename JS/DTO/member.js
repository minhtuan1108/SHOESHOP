class Member{

    constructor(name, id, facebook, avatar){
        this.name=name;
        this.id=id;
        this.facebook=facebook;
        this.avatar=avatar;
    }

    returnInfoHtml(){
        return `
        <div class="card-info" id="card">
            <div class="image-contain">
                <img src="${this.avatar}" alt="">
            </div>
            <div class="info">
                <h3 class="name">${this.name}</h3>
                <p class="code">${this.id}</p>
                <a href="${this.facebook}" target="_blank" class="contact-link" title="Facebook: ${this.name}"><i class="icon-fb fa-brands fa-facebook"></i>Facebook</a>
            </div>
        </div>
        `;
    }
}