# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: "Chirps",
  password: "catnip",
  name: "Chirps the Zero",
  bio: "I am a professinal cat blogger with revolutionary ideas. Everyone should follow me and claps at all of my genius creations. You're WELCOME!")


Post.create(
  title: "Lisa on Monday",
  body: "We left in pretty good time, and came after nightfall to Klausenburgh.
Here I stopped for the night at the Hotel Royale. I had for dinner, or
rather supper, a chicken done up some way with red pepper, which was
very good but thirsty. (_Mem._, get recipe for Mina.) I asked the
waiter, and he said it was called 'paprika hendl,' and that, as it was a
national dish, I should be able to get it anywhere along the
Carpathians. I found my smattering of German very useful here; indeed, I
don't know how I should be able to get on without it.

Having had some time at my disposal when in London, I had visited the
British Museum, and made search among the books and maps in the library
regarding Transylvania; it had struck me that some foreknowledge of the
country could hardly fail to have some importance in dealing with a
nobleman of that country. I find that the district he named is in the
extreme east of the country, just on the borders of three states,
Transylvania, Moldavia and Bukovina, in the midst of the Carpathian
mountains; one of the wildest and least known portions of Europe. I was
not able to light on any map or work giving the exact locality of the
Castle Dracula, as there are no maps of this country as yet to compare
with our own Ordnance Survey maps; but I found that Bistritz, the post
town named by Count Dracula, is a fairly well-known place. I shall enter
here some of my notes, as they may refresh my memory when I talk over my
travels with Mina.

In the population of Transylvania there are four distinct nationalities:
Saxons in the South, and mixed with them the Wallachs, who are the
descendants of the Dacians; Magyars in the West, and Szekelys in the
East and North. I am going among the latter, who claim to be descended
from Attila and the Huns. This may be so, for when the Magyars conquered
the country in the eleventh century they found the Huns settled in it. I
read that every known superstition in the world is gathered into the
horseshoe of the Carpathians, as if it were the centre of some sort of
imaginative whirlpool; if so my stay may be very interesting. (_Mem._, I
must ask the Count all about them.)

I did not sleep well, though my bed was comfortable enough, for I had
all sorts of queer dreams. There was a dog howling all night under my
window, which may have had something to do with it; or it may have been
the paprika, for I had to drink up all the water in my carafe, and was
still thirsty. Towards morning I slept and was wakened by the continuous
knocking at my door, so I guess I must have been sleeping soundly then.
I had for breakfast more paprika, and a sort of porridge of maize flour
which they said was 'mamaliga,' and egg-plant stuffed with forcemeat, a
very excellent dish, which they call 'impletata.' (_Mem._, get recipe
for this also.) I had to hurry breakfast, for the train started a little
before eight, or rather it ought to have done so, for after rushing to
the station at 7:30 I had to sit in the carriage for more than an hour
before we began to move. It seems to me that the further east you go the
more unpunctual are the trains. What ought they to be in China?
",
  author_id: 1,
)
