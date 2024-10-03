import uniqid from 'uniqid'
const ProjectItems = [
    {
        id: uniqid(), name: 'Fresh Out',
        stack: "Ruby | Javascript | Heroku | HTML/CSS",
        info: "An app to help you track your food expiry to prevent food wastage. Comes with a receipt scanner to make the process easier",
        img: require('../components/images/phone-screen-template.jpg')
    },
    {
        id: uniqid(),
        name: 'Japan Landmark',
        stack: "Ruby | Javascript | Heroku | HTML/CSS | Mapbox",
        info: "You can add your favourite landmarks in Japan, you can also view other users favourite landmarks and leave a review.",
        img: require('../components/images/Japan_Landmarks.jpg')
    },
    {
        id: uniqid(),
        name: 'Memory Card',
        stack: "React | Javascript | Node | HTML/CSS",
        info: "Memory game, don't click the same image twice or the game resets aim for the high score!",
        img: require('../components/images/Memory_Game.jpg')
    },
    {
        id: uniqid(),
        name: 'Farm BNB',
        stack: "Ruby | Javascript | Heroku | HTML/CSS",
        info: "An application for farmers to rent out their own farm animals and rent animals from other farmers",
        img: require('../components/images/farm-bnb.jpg')
    },
]

export default ProjectItems;
