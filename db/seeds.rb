# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

require 'faker'

post_body = 'This document assumes that one is familiar with the workings
 of a non-connected simple IP network (e.g. a few 4.2 BSD
 systems on an Ethernet not connected to anywhere else).
 Appendix A contains remedial information to get one to this
 point.  Its purpose is to get that person, familiar with a
 simple net, versed in the <b>"oral tradition"</b> of the Internet
 to the point that that net can be connected to the Internet
 with little danger to either.  It is <u>not a tutorial</u>, it
 consists of pointers to other places, literature, and hints
 which are not normally documented.  Since the Internet is a
 dynamic environment, changes to this document will be made
 regularly.  The author welcomes comments and suggestions.
 This is especially true of terms for the glossary (definitions
 are not necessary).<br><br>

 <b>Internet Protocol</b><br><br>

 In the beginning there was the ARPAnet, a wide area
 experimental network connecting hosts and terminal servers
 together.  Procedures were set up to regulate the allocation
 of addresses and to create voluntary standards for the network.
 As local area networks became more pervasive, many hosts became
 gateways to local networks.  A network layer to allow the
 interoperation of these networks was developed and called IP
 (Internet Protocol).  Over time other groups created long haul
 IP based networks (NASA, NSF, states...).  These nets, too,
 interoperate because of IP.  The collection of all of these
 interoperating networks is the Internet.<br><br>

 Two groups do much of the research and information work of
 the Internet (ISI and SRI).  <u>ISI (the Informational Sciences
 Institute) does much of the research, standardization, and
 allocation work of the Internet.</u>  SRI International provides
 information services for the Internet.  In fact, after you
 are connected to the Internet most of the information in
 this document can be retrieved from the Network Information
 Center (NIC) run by SRI.<br><br>

 <b>Operating the Internet</b><br><br>

 Each network, be it the ARPAnet, NSFnet or a regional network,
 has its own operations center.  The ARPAnet is run by
 BBN, Inc. under contract from DARPA.  Their facility is
 called the Network Operations Center or NOC.  Cornell
 University temporarily operates NSFnet (called the Network
 Information Service Center, NISC).  It goes on to the
 regionals having similar facilities to monitor and keep
 watch over the goings on of their portion of the Internet.
 In addition, they all should have some knowledge of what is
 happening to the Internet in total. If a problem comes up,
 it is suggested that a campus network liaison should contact
 the network operator to which he is directly connected. That
 is, if you are connected to a regional network (which is
 gatewayed to the NSFnet, which is connected to the
 ARPAnet...)  and have a problem, you should contact your
 regional network operations center.<br><br>

 <b>RFCs</b><br><br>

 The internal workings of the Internet are defined by a set
 of documents called RFCs (Request for Comments).  The general
 process for creating an RFC is for someone wanting something
 formalized to write a document describing the issue and mailing
 it to Jon Postel (postel@isi.edu).  He acts as a referee for
 the proposal.  It is then commented upon by all those wishing
 to take part in the discussion (electronically of course).
 It may go through multiple revisions.  Should it be generally
 accepted as a good idea, it will be assigned a number and
 filed with the RFCs.<br><br>

 The RFCs can be divided into five groups: required, suggested,
 directional, informational and obsolete.  Required RFCs (e.g.
 RFC-791, The Internet Protocol) must be implemented on any host
 connected to the Internet.  Suggested RFCs are generally
 implemented by network hosts.  Lack of them does not preclude
 access to the Internet, but may impact its usability.  RFC-793
 (Transmission Control Protocol) is a suggested RFC.  Directional
 RFCs were discussed and agreed to, but their application has never
 come into wide use.  This may be due to the lack of wide need for
 the specific application (RFC-937 The Post Office Protocol) or
 that, although technically superior, ran against other pervasive
 approaches (RFC-891 Hello).<br><br>

 It is suggested that should the facility be required by a particular site,
 <b>animplementation</b>
 be done in accordance with the RFC.  This insures that, should
 the idea be one whose time has come, the implementation will be
 in accordance with some standard and will be generally usable.
 Informational RFCs contain factual information about the
 Internet and its operation (RFC-990, Assigned Numbers).
 Finally, as the Internet and technology have grown, some
 RFCs have become unnecessary.  These <u>obsolete RFCs</u> cannot
 be ignored, however.  Frequently when a change is made to
 some RFC that causes a new one to be issued obsoleting others,
 the new RFC only contains explanations and motivations for the
 change.  Understanding the model on which the whole facility
 is based may involve reading the original and subsequent RFCs
 on the topic.<br><br>

 All titles for the articles are taken from the Outline.
 Please go to their website if you want to read more.'

first = User.create!(
  username: "Chirps",
  password: "catnip",
  name: "Chirps the Zero",
  bio: "I am a professinal cat blogger with revolutionary ideas. Everyone should follow me and claps at all of my genius creations. You're WELCOME!",
  avatar: "https://s3.amazonaws.com/channel-user-dev/chrips.jpeg"
)

user_ids = []

user_images = [
  "https://s3.amazonaws.com/channel-user-dev/user10.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user11.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user2.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user3.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user4.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user5.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user7.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user8.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user9.jpeg",
  "https://s3.amazonaws.com/channel-user-dev/user6.jpeg"
]

10.times do
  character = Faker::DrWho.unique.character
  profile_image = user_images.pop

  new_user = User.create!(
    username: character,
    password: character,
    name: character,
    bio: Faker::DrWho.quote,
    avatar: profile_image)
  user_ids << new_user.id
end

user_ids << first.id

user_ids.each do |id|
  follows = {}
  follows[id] = []
  Random.new.rand(8).times do
    followee = user_ids.sample
    next if followee == id
    next if follows[id].include?(followee)
    if follows[followee]
      next if follows[followee].include?(id)
    end
    follows[id] << followee
    Follow.create!(
      followee_id: followee,
      follower_id: id
    )
  end
end

titles = [
  "When Men Fear Women",
  "Hypocrisy is Dead",
  "The Performative Apologies of Very Guilty Men",
  "What is Active Listening",
  "Guns and the Left",
  "The Only Job a Robot Couldn't Do",
  "Neo Yokio's Rich Universe",
  "The Correct Way to be a Cannibal",
  "Tourists in Denial",
  "The Infinite Awfulness of Conservative Rap",
  "The Inner Lives of Adult One Direction Fans",
  "The New MacBook Keyboard is Ruining My Life",
  "The Algorithm is Innocent",
  "The IRS is Basically Ignoring Equity Crowdfunding",
  "The 19 Most Powerful People You Meet in Hell",
  "Climate Change is Real",
  "Don't Touch My Hair",
  "Thinking About You and Your Dog",
  "We will not be Silent no More",
  "Resist those Churros",
  "Lisa on Monday",
  "No Time Like the Past",
  "Let Me Tell You ABout my Favorite Sandwich",
  "Not my President",
]

post_images = [
  "https://s3.amazonaws.com/channel-user-dev/wave.jpg",
  "https://s3.amazonaws.com/channel-user-dev/art.jpg",
  "https://s3.amazonaws.com/channel-user-dev/green.jpg",
  "https://s3.amazonaws.com/channel-user-dev/bricks.jpg",
  "https://s3.amazonaws.com/channel-user-dev/flow.jpg",
  "https://s3.amazonaws.com/channel-user-dev/bright-yellow.jpg",
  "https://s3.amazonaws.com/channel-user-dev/jellyfish.jpg",
  "https://s3.amazonaws.com/channel-user-dev/buttons.jpg",
  "https://s3.amazonaws.com/channel-user-dev/pencils.jpg",
  "https://s3.amazonaws.com/channel-user-dev/pinkjellies.jpg",
  "https://s3.amazonaws.com/channel-user-dev/rainbow.jpg",
  "https://s3.amazonaws.com/channel-user-dev/wires.jpg",
  "https://s3.amazonaws.com/channel-user-dev/lights.jpg",
  "https://s3.amazonaws.com/channel-user-dev/ceiling.jpg",
  "https://s3.amazonaws.com/channel-user-dev/yellow.jpg",
  "https://s3.amazonaws.com/channel-user-dev/bottles.jpg",
  "https://s3.amazonaws.com/channel-user-dev/red.jpg",
  "https://s3.amazonaws.com/channel-user-dev/chair.jpg",
  "https://s3.amazonaws.com/channel-user-dev/blue.jpg",
  "https://s3.amazonaws.com/channel-user-dev/yellow-ocean.jpg",
  "https://s3.amazonaws.com/channel-user-dev/robot.jpg",
  "https://s3.amazonaws.com/channel-user-dev/tunnel.jpg",
  "https://s3.amazonaws.com/channel-user-dev/pink.jpg",
  "https://s3.amazonaws.com/channel-user-dev/neon.jpg"
]

post_ids = []

titles.each do |title|
  image = post_images.pop
  new_post = Post.create!(
    title: title,
    body: post_body,
    author_id: user_ids.sample,
    image: image)
  post_ids << new_post.id
end

post_ids.each do |id|
  Random.new.rand(10).times do
    Comment.create!(
      author_id: user_ids.sample,
      body: Faker::HitchhikersGuideToTheGalaxy.quote,
      post_id: id
    )
  end
end


post_ids.each do |id|
  Random.new.rand(20).times do
    Like.create!(
      post_id: id,
      user_id: user_ids.sample
    )
  end
end
