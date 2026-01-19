import prisma from './src/prismaClient.js';

async function main() {
    console.log('🌱 Debut du seeding...');
    
    const products = [
        {
            name: "Casque Audio Sans Fil",
            description: "Le casque audio sans fil offre une qualité sonore haute fidélité avec des basses profondes et des aigus clairs. Équipé de la technologie Bluetooth 5.0, il assure une connexion stable jusqu'à 10 mètres. Ses coussinets en mousse à mémoire de forme garantissent un confort optimal pour de longues sessions d'écoute. L'autonomie de la batterie est de 20 heures, avec un temps de charge rapide de 2 heures.",
            price: 129.99,
            image: "/Images/Images-Products/Casque1.png"
        },
        {
            name: "Clavier Gaming",
            description: "Conçu pour les gamers exigeants, ce clavier mécanique allie performance, rapidité et style. Ses switches mécaniques réactifs vous offrent un temps de réponse instantané et un retour tactile précis à chaque frappe, vous donnant un avantage décisif sur vos adversaires. Illuminez votre espace de jeu avec le rétroéclairage RGB personnalisable, qui propose des millions de couleurs et des effets dynamiques. Créez votre propre ambiance pour chaque jeu ou humeur. Le Clavier UltimaX Pro est plus qu'un simple accessoire, c'est une véritable extension de votre talent.",
            price: 89.99,
            image: "/Images/Images-Products/Clavier1.png"
        },
        {
            name: "Souris Gaming",
            description: "Conçue pour offrir un avantage compétitif, elle combine une ergonomie parfaite et une technologie de pointe pour une expérience de jeu fluide et réactive. Son capteur optique haute précision vous assure une réactivité fulgurante et un suivi sans faille, même lors des mouvements les plus rapides. Grâce à ses boutons programmables, vous pouvez personnaliser votre expérience et exécuter vos commandes préférées en un clin d'œil. Le design ambidextre s'adapte à toutes les mains pour un confort maximal, tandis que le rétroéclairage RGB ajoute une touche de style à votre setup. Légère et durable, la Nova-X est l'arme secrète qui vous mènera à la victoire.",
            price: 79.99,
            image: "/Images/Images-Products/Souris1.png"
        },
        {
            name: "Montre Connectée",
            description: "La Montre Connectée Nova-FIT est plus qu'un simple accessoire : c'est votre partenaire de bien-être au quotidien. Conçue pour s'intégrer parfaitement à votre vie active, elle vous aide à atteindre vos objectifs de santé et de fitness, tout en restant connecté à ce qui compte le plus. Recevez vos notifications d'appels, de messages et d'applications directement à votre poignet, et personnalisez votre style grâce à une variété de cadrans et de bracelets. Élégante, performante et résistante à l'eau, la Nova-FIT est la montre intelligente pour ceux qui vivent pleinement.",
            price: 89.99,
            image: "/Images/Images-Products/Montre1.png"
        },
        {
            name: "Ecouteurs Bluetooth",
            description: "Plongez dans un son immersif et une liberté totale avec les Écouteurs sans Fil AuraFLOW. Grâce à la suppression active du bruit (ANC), ils vous offrent une qualité audio exceptionnelle et un confort optimal. Légers, puissants et élégants, ils sont le choix parfait pour votre musique au quotidien.",
            price: 59.99,
            image: "/Images/Images-Products/Ecouteurs1.png"
        },
        {
            name: "Écran Gaming",
            description: "Plongez au cœur de l'action avec l'écran gaming UltraView 27 pouces, conçu pour offrir une immersion totale et des performances visuelles exceptionnelles. Sa dalle Full HD avec un taux de rafraîchissement de 165 Hz garantit une fluidité extrême, idéale pour les jeux rapides et compétitifs. Grâce à son temps de réponse ultra-rapide et à la technologie anti-déchirure, profitez d'images nettes et sans saccades. Son design moderne aux bordures fines s'intègre parfaitement à tout setup gaming ou professionnel.",
            price: 249.99,
            image: "/Images/Images-Products/Ecran1.jpg"
        },
        {
            name: "Enceinte Bluetooth Portable",
            description: "L'enceinte Bluetooth PulseBeat combine puissance sonore et portabilité pour vous accompagner partout. Dotée de basses renforcées et d'un son clair à 360°, elle transforme chaque moment en véritable expérience musicale. Sa batterie longue durée offre jusqu'à 15 heures d'autonomie, tandis que sa conception résistante aux éclaboussures la rend idéale pour une utilisation en intérieur comme en extérieur. Compacte et élégante, PulseBeat est la solution parfaite pour partager votre musique sans compromis.",
            price: 69.99,
            image: "/Images/Images-Products/Enceinte1.jpg"
        },
        {
            name: "Webcam HD",
            description: "Pensée pour le streaming, le télétravail et les appels vidéo, la webcam StreamCam Pro offre une qualité d'image Full HD d'une netteté remarquable. Son autofocus intelligent et sa correction automatique de la luminosité garantissent un rendu professionnel en toutes circonstances. Le microphone intégré avec réduction de bruit assure une voix claire et naturelle. Facile à installer et compatible avec les principales plateformes de visioconférence, elle est l'outil indispensable pour une communication moderne et efficace.",
            price: 99.99,
            image: "/Images/Images-Products/Webcam1.jpg"
        },
        {
            name: "Batterie Externe",
            description: "La batterie externe PowerBank 20 000 mAh est l'accessoire indispensable du quotidien pour rester connecté en toutes circonstances. Grâce à sa grande capacité, elle permet de recharger plusieurs fois votre smartphone, tablette ou autres appareils USB. Équipée de ports de charge rapide, elle assure une recharge efficace et sécurisée. Compacte et facile à transporter, elle est parfaite pour les déplacements, les voyages ou les longues journées hors de chez soi.",
            price: 34.99,
            image: "/Images/Images-Products/PowerBank1.jpg"
        }
    ]

    for (const product of products) {
        await prisma.products.create({
            data: product
        })
        console.log(`✅ Produit créé : ${product.name}`);
    }
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})