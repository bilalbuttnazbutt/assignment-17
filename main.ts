let guest_list: string[] = [`maryam`,`ansar`,`sana`,`sadia`,`nazish`];

let not_coming: string = `maryam`;
let new_guest: string = `naveed`;
guest_list[0] = new_guest;

guest_list.unshift(`sami`);
guest_list.splice(guest_list.length/2,2, "messi");
guest_list.push("ayaz");

console.log(`\n\nUnfortunately we are out of space, so have space for two guest only.\n\n`);
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry, Dear ${remove_guest}, You are not invited for a dinner tomorrow`);
}
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are all still invited for a dinner tomorrow.\n\nThank you.\n\n`);
}

guest_list.splice(0,2);
console.log(guest_list);
