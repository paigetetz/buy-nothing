puts "Destroying databases"

User.destroy_all
Listing.destroy_all
Event.destroy_all

puts "Done!"

puts "Seeding users...👥"

u1= User.create(username:"user", password:"1234", email: "cerimay@gmail.com", profile_pic:"https://i.natgeofe.com/k/5af79b71-007d-46f8-8efe-bf37a504195b/california-golden-gate-bridge.jpg", bio: "I'm a bio"))

puts "Users created"

puts "Seeding listings..."

l1= Listing.create(name:"OXO coffee maker",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9IJdwXWauxu2XeWL_smWmIhynJCGP0GpmvAFdSCxmQ&usqp=CAU&ec=48600112", description:"Got a second as a wedding gift and don't need it! Happy to give away to whoever wants it!", location:"Ventura, CA", user_id: u1.id)
l2= Listing.create(name:"Pilea money plant",image_url:"https://i0.wp.com/blog.mytastefulspace.com/wp-content/uploads/2021/10/Pilea-facing-North.jpg?fit=819%2C1024&ssl=1", description:"She's gotten way too large for my small apartment and needs a loving home.", location:"Orange County, CA", user_id: u1.id)
l3= Listing.create(name:"Amazon Alexa Echo Dot",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyNBifnhZNAqV6goXVlhqibL9MFQw3vYgBDe70ZFo2g&usqp=CAU&ec=48600112", description:"I just switched to Apple but this has served me well! Free!", location:"San Francisco, CA", user_id: u1.id)
l4= Listing.create(name:"The Wind Up Bird Chronicle by Haruki Murakami",image_url:"https://uulibraryblog.files.wordpress.com/2019/11/wind-up.jpg?w=587&h=587", description:"Read it. Loved it. Passing it along.", location:"San Diego, CA", user_id: u1.id)
l5= Listing.create(name:"Hamilton Beach Classic Chrome 2-Slice Toaster",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5wQG_-qr-48RwhqjZaOg_Rh_qoHiSXKH4kNqgUuKZi1PEsP5KGqrW4GZnmT8VR8kmKaCiJK73PI&usqp=CAU&ec=48600112", description:"Upgraded to the touchscreen version. Still works!", location:"Newport Beach, CA", user_id: u1.id)


puts "Listings created"

puts "Seeding events..."

e1= Event.create(name:"AthenaHacks", location:"Los Angeles, CA", description:"Southern California’s premier hackathon for women and individuals with marginalized gender identities!", time:"10am PST", date: 02/25/2023, user_id: u1.id, image_url: 'https://scontent.fosu2-2.fna.fbcdn.net/v/t39.30808-6/324588045_690427422749543_4320982485235931654_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PvNxH3v-0b4AX_V3Ink&_nc_ht=scontent.fosu2-2.fna&oh=00_AfByfufMcn7vMKmd9D_s_lQiMCN8mnwiwSHnoQycTcDRzg&oe=640058D6')
e2= Event.create(name:"San Francisco Pride - Looking Back & Moving Forward", location:"San Francisco, CA", description:"San Francisco Pride Celebration and Parade is the largest gathering of the LGBT community and allies in the nation. Our Pride Celebration begins on a Saturday in Civic Center Plaza in downtown San Francisco the last full weekend of June each year. The Parade, which takes place the Sunday morning of the event, kicks off from Beale Street along Market and ends at Market and 8th St. in the heart of downtown San Francisco.", time:"10:30am PST", date: 06/24/2023-06/25/2023, user_id: u1.id, image_url: 'https://ww2.kqed.org/app/uploads/sites/10/2018/06/GettyImages-800808564-1920x1188.jpg')

puts "Events created"
