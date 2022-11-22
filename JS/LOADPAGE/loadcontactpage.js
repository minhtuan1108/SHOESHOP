function innerContact(){
    let list=[];
    list[0]=new Member("Võ Minh Tuấn", "3120410591","https://www.facebook.com/profile.php?id=100052483311803", "./assets/img/avatar/member/MinhTuan.jpg");
    list[1]=new Member("Lã Trần Minh Anh", "3120410028", "https://www.facebook.com/minhanh.latran.5", "./assets/img/avatar/member/MinhAnh.jpg");
    list[2]=new Member("Nguyễn Hồ Khánh An", "3121410048", "https://www.facebook.com/100013596907860/", "./assets/img/avatar/member/HoAn.jpg");
    list[3]=new Member("Lê Vạn An", "3121560009", "https://www.facebook.com/profile.php?id=100047180527357", "./assets/img/avatar/member/VanAn.png");


    var contactHtml=
    `<div class="container-info">
        <div class="container-cards" id="container-cards">
        </div>
    </div>`;

    document.getElementById('content').innerHTML=contactHtml;

    let cardHtml=" <!--Contact page-->";
    list.forEach((item) => {
        cardHtml+=item.returnInfoHtml();
    });

    console.log(cardHtml);

    document.getElementById('container-cards').innerHTML=cardHtml;
}