const Book = require('../models/Book');
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/myLibraryDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connected....")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const bookSeeds = [
  {
    title: "Hop on Pop",
    author: "Dr. Seuss'",
    isbn: "9780553496796",
    genre: "fiction",
    description: "A sturdy board-book edition of Dr. Seuss’s Hop on Pop, now available in a larger size perfect for babies and toddlers! This abridged version of the classic Beginner Book Hop on Pop introduces the youngest readers to the wonderful world of Seussian wordplay. See RED and NED and TED and ED in BED. And giggle as PAT sits on a HAT and a CAT and a BAT . . . and almost on a cactus! (NO PAT NO, don’t sit on that.) A perfect gift for baby showers, birthdays, and happy occasions of all kinds, it is also a great way to show Pop some love on Father’s Day!",
    image: "http://books.google.com/books/content?id=_XeJDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2015-04-14",
    price: 22.56,
  },
  {
    title: "The Last Week of May",
    author: "Roisin Meaney",
    isbn: "9781444725612",
    genre: "fiction",
    description: "THE NUMBER ONE BESTSELLER -- a warm engrossing tale of friendship and new beginnings ... 'Like chatting with a good friend over a cup of tea' Irish Mail on Sunday May O'Callaghan has decided that life's too short and she's decided to throw in the towel in her predictable nine-to-five job. Now what? As May fits into her new life we meet her friend Pam and her husband Jack - but why is Pam terrified to tell Jack that she's pregnant? And then there's Denis and Bernard, May's next-door neighbours, going about their business oblivious to the deadly threat that lurks close by. There's Paddy, who lives on his own yet never seems to be at home. And Paul, three doors up, willing to risk everything for an affair with Carmel, the young teacher who has yet to learn that there's a price to pay for having something that shouldn't be yours. But what May can't figure out is who gave her the beautiful shell necklace and was it really meant for her? On this one particular week, all is about to change for the inhabitants of Kilpatrick and May discovers that while only love can break your heart, only love can put it back together.",
    image: "http://books.google.com/books/content?id=Xz05AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2007-05-17",
    price: 15.22,
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    isbn: "9780735219113",
    genre: "fiction",
    description: "NOW A MAJOR MOTION PICTURE—The #1 New York Times bestselling worldwide sensation with more than 15 million copies sold, hailed by The New York Times Book Review as “a painfully beautiful first novel that is at once a murder mystery, a coming-of-age narrative and a celebration of nature.” For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life—until the unthinkable happens. Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder. Owens reminds us that we are forever shaped by the children we once were, and that we are all subject to the beautiful and violent secrets that nature keeps.",
    image: "http://books.google.com/books/content?id=CGVDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2018-08-14",
    price: 19.55,
  },
  {
    title: "The Almond in the Apricot",
    author: "Sara Goudarzi",
    isbn: "9781646051090",
    genre: "fiction",
    description: "The Almond in the Apricot, a debut novel by Iranian-American Goudarzi, is about two individuals whose paths cross in the most unusual of ways: a woman coming to terms with the wreckage of her once-orderly life and a tween girl struggling to live an everyday in a war-torn country. Emma had the perfect trifecta: a long-term, albeit boring, job as an engineer in wastewater management; a steady relationship with her reliable boyfriend; and an adoring and creative best friend (about whom she wasn't quite ready to admit her unrequited feelings). However, after one crackling, long-distance phone call, her world changed forever. Now she's having nightmares that threaten to disrupt the space-time continuum -- nightmares of hiding from missiles in basements, of glass shattering in the night from nearby explosions. But these nightmares, featuring a young girl named Lily, seem all too real, and Emma's waking life begins to be affected by the events that transpire in this mysterious wartime landscape. The Almond in the Apricot explores love, grief, and the possibility that the universe might be bigger than either Emma or Lily ever imagined.",
    image: "http://books.google.com/books/content?id=8J0nzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "2022-01-17",
    price: 21.63,
  },
  {
    title: "The People’s Princess",
    author: "Flora Harding",
    isbn: "9780008446932",
    genre: "fiction",
    description: "Step behind the palace doors in this gripping historical novel that is a must read for fans of The Crown and Princess Diana!",
    image: "http://books.google.com/books/content?id=ulsjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2022-03-31",
    price: 13.44,
  },
  {
    title: "Aleister Crowley",
    author: "Tobias Churto",
    isbn: "9781780283845",
    genre: "Biography",
    description: "At last, the unexpurgated, true story of the amazing Aleister Crowley—philosopher, poet, artists, writer, magus, explorer, parapsychology—and spy. Packed with fresh research and previously unpublished ‘Crowleyana.’ For 100 years, Aleister Crowley’s true achievements have been suppressed and his true character defaced in a campaign of vilification unparalleled in British history. Until now, Crowley’s life has not been written—it has been written over. Tobias Churton is a world authority on Freemasonry, Rosicrucianism, and Gnosticism. In writing Aleister Crowley, he enjoyed complete access to all Crowley’s restricted papers, unpublished letters and personal diaries kept in a trust at London’s Warburg Institute and in the Ordo Templi Orientis archives. Ninety percent of the authentic material here has never before been published.",
    image: "http://books.google.com/books/content?id=NFjZCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2014-05-20",
    price: 17.55,
  },
  {
    title: "Shakey: Neil Young's Biography",
    author: "Jimmy McDonough",
    isbn: "9780679750963",
    genre: "Biography",
    description: "Neil Young is one of rock and roll’s most important and enigmatic figures, a legend from the sixties who is still hugely influential today. He has never granted a writer access to his inner life – until now. Based on six years of interviews with more than three hundred of Young’s associates, and on more than fifty hours of interviews with Young himself, Shakey is a fascinating, prodigious account of the singer’s life and career. Jimmy McDonough follows Young from his childhood in Canada to his cofounding of Buffalo Springfield to the huge success of Crosby, Stills, Nash and Young to his comeback in the nineties. Filled with never-before-published words directly from the artist himself, Shakey is an essential addition to the top shelf of rock biographies",
    image: "http://books.google.com/books/content?id=N__84GtwaUUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "2003-05-13",
    price: 11.23,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isbn: "9781451648546",
    genre: "Biography",
    description: "Draws on more than forty interviews with Steve Jobs, as well as interviews with family members, friends, competitors, and colleagues to offer a look at the co-founder and leading creative force behind the Apple computer company",
    image: "http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2011",
    price: 15.69,
  },
  {
    title: "Clementine Churchill",
    author: "Mary Soames",
    isbn: "9780618267323",
    genre: "Biography",
    description: "Clementine Churchill -- shy, passionate, and high-strung -- shunned publicity but was in the limelight throughout her adult life. As a young woman, her character, intelligence, and good looks won the attention of the impetuous Winston Churchill. Their courtship was swift, but their marriage proved immensely strong, spanning many of the major events of the twentieth century. Written with affection and candor by the Churchills' daughter Mary Soames, this revised and updated biography of a lionhearted couple's life together is not only of historic interest but deeply moving",
    image: "http://books.google.com/books/content?id=hOpXeY-1pwwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2002",
    price: 9.55,
  },
  {
    title: "Bowie",
    author: "Wendy Leigh",
    isbn: "9781476767079",
    genre: "Biography",
    description: "A revealing look at David Bowie, including rarely seen photos, draws on interviews with his lovers, girlfriends, business associates, groupies, and band members to shine a light on the life and career of this hypnotic performer",
    image: "http://books.google.com/books/content?id=6tGKBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2014-09-23",
    price: 19.11,
  },
  //11
  {
    title: "Mandela",
    author: "Anthony Sampson",
    isbn: "9780679781783",
    genre: "Biography",
    description: "Nelson Mandela, who emerged from twenty-six years of political imprisonment to lead South Africa out of apartheid and into democracy, is perhaps the world's most admired leader, a man whose life has been led with exemplary courage and inspired conviction. Now Anthony Sampson, who has known Mandela since 1951 and has been a close observer of South Africa's political life for the last fifty years, has produced the first authorized biography, the most informed and comprehensive portrait to date of a man whose dazzling image has been difficult to penetrate. With unprecedented access to Mandela's private papers (including his prison memoir, long thought to have been lost), meticulous research, and hundreds of interviews--from Mandela himself to prison warders on Robben Island, from Walter Sisulu and Oliver Tambo to Winnie Mandela and F. W. de Klerk, and many others intimately connected to Mandela's story--Sampson has composed an enlightening and necessary story of the man behind the myth.",
    image: "http://books.google.com/books/content?id=4rOOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "2000-09-12",
    price: 14.50,
  },
  {
    title: "James Baldwin",
    author: "David Leeming",
    isbn: "9781628724387",
    genre: "Biography",
    description: "James Baldwin was one of the great writers of the last century. In works that have become part of the American canon—Go Tell It on a Mountain, Giovanni’s Room, Another Country, The Fire Next Time, and The Evidence of Things Not Seen—he explored issues of race and racism in America, class distinction, and sexual difference. A gay, African American writer who was born in Harlem, he found the freedom to express himself living in exile in Paris. When he returned to America to cover the Civil Rights movement, he became an activist and controversial spokesman for the movement, writing books that became bestsellers and made him a celebrity, landing him on the cover of Time. In this biography, which Library Journal called “indispensable,” David Leeming creates an intimate portrait of a complex, troubled, driven, and brilliant man. He plumbs every aspect of Baldwin’s life: his relationships with the unknown and the famous, including painter Beauford Delaney, Richard Wright, Lorraine Hansberry, Marlon Brando, Harry Belafonte, Lena Horne, and childhood friend Richard Avedon; his expatriate years in France and Turkey; his gift for compassion and love; the public pressures that overwhelmed his quest for happiness, and his passionate battle for black identity, racial justice, and to “end the racial nightmare and achieve our country.” Skyhorse Publishing, along with our Arcade, Good Books, Sports Publishing, and Yucca imprints, is proud to publish a broad range of biographies, autobiographies, and memoirs. Our list includes biographies on well-known historical figures like Benjamin Franklin, Nelson Mandela, and Alexander Graham Bell, as well as villains from history, such as Heinrich Himmler, John Wayne Gacy, and O. J. Simpson. We have also published survivor stories of World War II, memoirs about overcoming adversity, first-hand tales of adventure, and much more. While not every title we publish becomes a New York Times bestseller or a national bestseller, we are committed to books on subjects that are sometimes overlooked and to authors whose work might not otherwise find a home",
    image: "http://books.google.com/books/content?id=pjxRnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "2015-02-24",
    price: 12.22,
  },
  {
    title: "The Children's Book",
    author: "A. S. Byatt",
    isbn: "9780307373830",
    genre: "Children",
    description: "From the renowned author of Possession, The Children’s Book is the absorbing story of the close of what has been called the Edwardian summer: the deceptively languid, blissful period that ended with the cataclysmic destruction of World War I.",
    image: "http://books.google.com/books/content?id=vvGjivw-rHgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2009-11-03",
    price: 16.99,
  },
  {
    title: "The Jungle Books",
    author: "Rudyard Kipling",
    isbn: "9780199536450",
    genre: "Children",
    description: "Presents the adventures of Mowgli, a boy reared by a pack of wolves and the wild animals of the jungle. Also includes other short stories set in India.",
    image: "http://books.google.com/books/content?id=u6UVDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2008-06-12",
    price: 8.84,
  },
  {
    title: "The Second Jungle Book",
    author: "Rudyard Kipling",
    isbn: "9789385031861",
    genre: "Children",
    description: "Presents the further adventures of Mowgli, a boy reared by a pack of wolves, and the wild animals of the jungle. Also includes other short stories set in India.",
    image: "http://books.google.com/books/content?id=YzRLAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2012-06-12",
    price: 9.12,
  },
  {
    title: "The Lion King",
    author: "Paul Shipton",
    isbn: "9781408286975",
    genre: "Children",
    description: "Mufasa was the king of the Pride Lands. He was also Simba's father. \"You are going to be the king of all this,\" Mufasa told his son. But Simba's uncle, Scar, had a different plan... Who will be \"The Lion King\"",
    image: "http://books.google.com/books/content?id=nkt_tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "2012",
    price: 5.56,
  },
  {
    title: "I Am Simba",
    author: "Paul Shipton",
    isbn: "9780736439718",
    genre: "Children",
    description: "A new Little Golden Book all about Simba, the star of Disney's The Lion King--just in time for the live-action movie, which will be in theaters July 2019! This new Little Golden Book celebrates everything that is special about Simba, the brave lion cub from the beloved Disney movie The Lion King. Nala, Timon, Pumbaa, and other animals from the Pride Lands are featured in gorgeous retro-style illustrations. This book is a must-have for children ages 2 to 5, as well as Disney The Lion King fans--and collectors--of all ages! And the new live-action version of the film, starring the voices of Beyonce, Donald Glover, James Earl Jones, and John Oliver, hits theaters July 2019. Disney The Lion King was released in 1994 and became one the most popular animated films. ",
    image: "http://books.google.com/books/content?id=ezdzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2019-07-02",
    price: 6.23,
  },
  //18
]

/*
  {
    title: "",
    author: "",
    isbn: "",
    genre: "",
    description: "",
    image: "",
    publishedDate: "",
    price: "",
  },
*/

const seedDB = async () => {
  await Book.deleteMany({});
  await Book.insertMany(bookSeeds);
}

seedDB().then(()=> {
  mongoose.connection.close()
})