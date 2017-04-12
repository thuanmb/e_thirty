# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# user = CreateAdminService.new.call
# puts 'CREATED ADMIN USER: ' << user.email

# seed roles

# create and admin
# admin = User.find_or_create_by(email: 'admin@e30.com', is_admin: true)
# admin.password = 'changeme'
# admin.save!
#
# if Article.count == 0
#   content = "<div><p>Working remotely is an awesome thing to be able to do. But, in order to do this successfully, you need to have access to all the right tools. There are a lot of challenges, but some tools and platforms can help you deal with these difficulties.</p><p>Check out these eight tools that remote workers will find useful:</p><h3><strong>1.&nbsp;<a href=\"http://hipchat.com/\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'http://hipchat.com/', 'Hipchat');\" rel=\"follow\" data-ct=\"c4f3f30b051c43546851a4ae461ae78e\">Hipchat</a></strong></h3><p>Staying in touch with your team can be challenging when you are a remote worker. This tool will help you to stay in touch. Use it for group chats, video chats, and screen sharing, so everyone is always in the loop about what is going on, who is doing what, what has been done, and what is left to be done. You will always be able to stay connected, no matter where in the world each member of your team is located.</p><h3><strong>2.&nbsp;<a href=\"https://hackpad.com/\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://hackpad.com/', 'Hackpad');\" rel=\"follow\" data-ct=\"ba809e0f55770871a3403f3de3463959\">Hackpad</a></strong></h3><p>This tool is free for personal use, and just US$2 per user for private workspaces. It allows you to collaborate with your team, from anywhere in the world. Take collaborative notes, share data and files, and more. Use this tool to create to-do lists to monitor progress, capture context, supporting data, etc. in one place, and much more.</p><h3><strong>3.&nbsp;<a href=\"https://www.airbnb.com/\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://www.airbnb.com/', 'Airbnb');\" rel=\"follow\" data-ct=\"9c689a506347e287caa5c656f0955775\">Airbnb</a></strong></h3><p>If you have to travel for your job, do it on the cheap. Rather than staying in expensive hotels, look into renting rooms in private homes through Airbnb. You can use this tool for booking more than just accommodations. Use it for booking adventures, taking online classes, signing up for sports events, and a whole lot more. Use this tool for both working, and to enjoy some of the more fun things in life.</p><p><strong>Also read: <a href=\"https://e27.co/looking-hire-global-talent-remote-work-5-tips-advice-20170407/\" data-ct=\"4436056e307950aec27ebe3010259156\">Looking to hire global talent for remote work? Here are 5 tips for you</a></strong></p><h3><strong>4.&nbsp;<a href=\"https://workfrom.co/\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://workfrom.co/', 'WorkFrom');\" rel=\"follow\" data-ct=\"ebd8bf3d942be3664e0b7949d5792b49\">WorkFrom</a></strong></h3><p>As a remote worker, you can work from just about anywhere, including coffee shops, cafes, and other work-friendly places. You just need to know where to find these places. WorkFrom is a tool that will search for work-friendly places in any location you wish, so you can find them easily and have new locations to work from. This allows you even more freedom, because you have so many more options to choose from.</p><h3><strong>5.&nbsp;<a href=\"https://www.gadgetsalvation.com/sell-macbook\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://www.gadgetsalvation.com/sell-macbook', 'GadgetSalvation');\" rel=\"follow\" data-ct=\"e9ffc1c5f249a52e07b1f635c03696c1\">GadgetSalvation</a></strong></h3><p>You need to have up-to-date tech, but this can get expensive. Rather than spending a lot of money on a new computer, go to GadgetSalvation. There, you can sell your old tech, including laptops, tablets, and smartphones, and get money to upgrade to new gear. You can also find great deals on new gear right on the site.</p><h3><strong>6.&nbsp;<a href=\"https://quip.com/about/home/short\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://quip.com/about/home/short', 'Quip');\" rel=\"follow\" data-ct=\"2210c64154559c703a70b92fdfa40f56\">Quip</a></strong></h3><p>This is a connected hub that lets teams get together to collaborate on projects, discuss projects, organize work, and much more. You can use Quip on any device, so you can be anywhere in the world and still be able to connect with your team and get things done. Check out the risk-free trial today.</p><h3><strong>7.&nbsp;<a href=\"https://lastpass.com/\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://lastpass.com/', 'LastPass');\" rel=\"follow\" data-ct=\"f4215a713dfff5abe21c8f12001138c2\">LastPass</a></strong></h3><p>Password management can be a complete pain in the you-know-what. But, it is not so bad when you have the right password management tool. LastPass is the tool you need. It provides you with one master password, so you don\u2019t have to worry about writing passwords down on scraps of paper and then losing them later on when you really need them. LastPass is free to use, so you have nothing to lose (especially your passwords).</p><p><strong>Also read: <a href=\"https://e27.co/4-essential-productivity-tips-businesses-remote-friendly-policies-20170221/\" data-ct=\"b62ee8cf3d68eafa0875aab2aadde149\">4 essential productivity tips for businesses with remote-friendly policies</a></strong></p><h3><strong>8.&nbsp;<a href=\"https://glip.com/\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://glip.com/', 'Glip');\" rel=\"follow\" data-ct=\"b03751f8015283deecba925b7ef12a91\">Glip</a></strong></h3><p>This is another great tool for team messaging, file sharing, task management, screen sharing, and more. You will have a built-in task calendar, chat, file sharing, video conferencing, and other tools, all within this one awesome tool box. The best part is, Glip is completely free to use.</p><p>\u2014-</p><h3>Want to be part of the ecosystem?</h3><p><a href=\"http://e27.co/echelon/asia/register/?code=EMPOWER10\" rel=\"follow\" data-ct=\"98e39ef6baf47e3f18f392b292380d02\">Register for your Echelon Asia Summit access pass now</a>! Enjoy +10% off Echelon Asia Summit Startup, Investor and Corporate passes just for being our favourite <strong>e27</strong> reader.</p><p>The views expressed here are of the author\u2019s, and&nbsp;<strong>e27</strong>&nbsp;may not necessarily subscribe to them.&nbsp;<strong>e27</strong>&nbsp;invites members from Asia\u2019s tech industry and startup community to share their honest opinions and expert knowledge with our readers. If you are interested in sharing your point of view,&nbsp;<a rel=\"follow\" href=\"https://e27.co/contribute\" data-ct=\"410c4798d461dab8152d019dc24f7252\">submit your post here</a>.</p><p>Featured Image Copyright: <a href=\"https://www.123rf.com/profile_vitaliymateha\" onclick=\"__gaTracker('send', 'event', 'outbound-article', 'https://www.123rf.com/profile_vitaliymateha', 'vitaliymateha / 123RF Stock Photo');\" rel=\"follow\" data-ct=\"9d46a11c90561467224e4285bf0fe513\">vitaliymateha / 123RF Stock Photo</a></p></div>"
#   9500.times.each do |index|
#     Article.create(
#         title: "[Title - #{index}] These 8 tools can help you deal with the challenges of remote work",
#         subtitle: "[Subtitle - #{index}] Stay in touch and be productive, while enjoying the flexibility of working outside of the office",
#         image_url: "https://e27.co/wp-content/uploads/2017/04/remote-working-1.jpg",
#         content: "<p>[Content - #{index}]</p>#{content}",
#         published_at: rand(1..10000).minutes.ago)
#   end
# end