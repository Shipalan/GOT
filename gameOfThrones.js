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

// Health kit added to Jon Snows health if it is greater than or equal to 100
if ((jonSnowHealth + healthKit) >= 100) {
    // Since his health would be higher than 100 we just set his health to 100
    jonSnowHealth = 100;
} else {
    // If his health doesnt go over 100 the health kit is added to his current health
    jonSnowHealth += healthKit;    
}

// This displays his current health after the potion
console.log(`Jon Snows Health is now ${jonSnowHealth}`);