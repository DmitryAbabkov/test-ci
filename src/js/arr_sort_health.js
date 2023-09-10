export default function sortHealth(data) {
    data.sort((a,b) => {
       return b.health - a.health;
    })
}
