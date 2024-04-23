var guest_list = ["maryam", "ansar", "sana", "sadia", "nazish"];
var not_coming = "maryam";
var new_guest = "naveed";
guest_list[0] = new_guest;
guest_list.unshift("sami");
guest_list.splice(guest_list.length / 2, 2, "messi");
guest_list.push("ayaz");
console.log("\n\nUnfortunately we are out of space, so have space for two guest only.\n\n");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry, Dear ".concat(remove_guest, ", You are not invited for a dinner tomorrow"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are all still invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
guest_list.splice(0, 2);
console.log(guest_list);
