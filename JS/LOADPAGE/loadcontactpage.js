function innerContact(){
    let list=[];
    list[0]=new Member("Võ Minh Tuấn", "3120410591","https://www.facebook.com/profile.php?id=100052483311803", "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/273714156_460777322348374_4709534381351556646_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wMwdS39Apf0AX_M8pn_&tn=Td5he0jOTvh8hM6j&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfALlrnS-u_oyf1ihaUccdqOSBkFy0Ue2jSE5piE3x8J6g&oe=63606833");
    list[1]=new Member("Lã Trần Minh Anh", "3120410028", "https://www.facebook.com/minhanh.latran.5", "https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/287201411_1260364664703828_5898508697427628098_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=J5fXTwZHxcEAX8QtI0u&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfBLooVkXe3SGDMbpo8y3FsSvh9hlBcozFsYLbsO79Ar1Q&oe=6361CBB2");
    list[2]=new Member("Nguyễn Hồ Khánh An", "3121410048", "https://www.facebook.com/100013596907860/", "https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/307112432_1498984490564767_8117870515551418617_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NE2XfFdW8AUAX9cPLuL&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfC_gvqJxP6hKyZTfiuAxDIKkV3einiPb7CNQEri8uvPCA&oe=6362DD0B");
    list[3]=new Member("Lê Vạn An", "3121560009", "https://www.facebook.com/profile.php?id=100047180527357", "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=po1ozqaSBowAX_ZWCNh&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDkBgovEC46vQVdRFa1HWnKI1N0SMNEE-HM2-xZusoovw&oe=63845B78");


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