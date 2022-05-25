 // Jons status
 let jonSnowAttack = 25;
 let jonSnowHealth = 100;
 let jonsSnowDefense = 0;

//Jamies stats
let jamieLannisterAttack = 35;


if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (jonSnowAttack < jamieLannisterAttack) {
    console.log("Jamie Lannister has better attack than John Snow");
} else {
    console.log('jon snow and jamie lannister have the same attack');
}

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon snow has been slayed');
} else {
    //jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jons health is down to ${jonSnowHealth}`);
}

// Jon picks up a shield
jonsSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonsSnowDefense){
    console.log('Jon snow has been slayed');
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonsSnowDefense);
    console.log(`Jon Snows health is down to ${jonSnowHealth}`);

}

// Peasant throws Jon a health kit of 50
const healthKit = 50;

if ((jonSnowHealth + healthKit) >= 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += healthKit;
    
}

console.log(`Jon Snows Health is now ${jonSnowHealth}`);