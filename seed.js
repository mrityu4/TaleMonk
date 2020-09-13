var mongoose = require("mongoose");
var Story = require("./models/story.js")
// var Comment = require("./models/comment.js");
var data = [
    {
        name: "To Kill a Mockingbird, by Harper Lee",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/50-anniversary-cover1.jpg",
        desc: "Published in 1960, this timeless classic explores human behaviour and the collective conscience of The Deep South in the early 20th century. Humour entwines the delicate strands of prejudice, hatred, hypocrisy, love and innocence to create one of the best novels ever written."
    },
    {
        name: "1984, by George Orwell",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/1984.jpg",
        desc: "Although 1984 has passed us by, George Orwell’s dystopian, totalitarian world of control, fear and lies has never been more relevant. Delve into the life of Winston Smith as he struggles with his developing human nature in a world where individuality, freewill and love are forbidden."
    },
    {
        name: "Harry Potter and the Philosopher’s Stone, by J.K. Rowling",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/harry_potter_and_the_Sorcerers_stone_adult_usa.jpg",
        desc: "I’m willing to bet you’ve heard of Harry Potter, but have you read the books? Join Harry Potter as he begins his journey into the world of magic, where he is the celebrated Boy Who Lived. Visit Hogwarts, meet your favourite characters and watch Harry grow into the one of the most famous literary characters in the world."
    },
    {
        name: "The Lord of the Rings, by J.R.R. Tolkien",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/9780618640157_custom-s6-c30.jpg",
        desc: "Middle Earth is a wonderful, expansive fantasy world filled with turmoil, heroes, evil and innocence. Although our protagonist Frodo Baggins’ quest seems impossible to complete, this trilogy is a tale of triumph in the most impossible circumstances."
    },
    {
        name: "The Great Gatsby, by F. Scott Fitzgerald",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/Penguin-2.jpg",
        desc: "Published in 1925, Fitzgerald’s The Great Gatsby explores the decadence of the Jazz Age, and one man’s introduction into a world where even those with the most indulgent lives cannot earn love."
    },
    {
        name: "Pride and Prejudice, by Jane Austen",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/pride_and_prejudice_book_cover_by_fourblackbirds-d533108.png",
        desc: "One of the most famous novels of all time, Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance."
    },
    {
        name: "The Diary Of A Young Girl, by Anne Frank",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/diary-of-anne-frank-postcard-front_0.jpg",
        desc: "Unforgettable and deeply influential, Anne Frank’s diary is a raw account of a young girl’s life as she hides from the Nazis. Despite her circumstances, Anne believes that people are still good at heart and that the world is full of beauty: she will change your life."
    },
    {
        name: "The Book Thief, by Markus Zusak",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/71h2sjik5al-_sl1380_.jpg",
        desc: "Set in Germany during 1939, The Book Thief follows Liesel as she rescues books from the tyranny of Nazi rule. Meanwhile, her family has hidden a Jewish fighter in their basement and death looks down on the family, narrating our tale. Experience bravery that is rarely found in the world, and friendship that is formed in the most unlikely of situations."
    },
    {
        name: "The Hobbit, by J.R.R. Tolkien",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/Hobbit_book.jpg",
        desc: "Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon."
    },
    {
        name: "Little Women, by Louisa May Alcott",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/9780147514011.jpg",
        desc: "Join four sisters, each with their own prominent personality, as they come of age in charming 19th Century New England. Experience their struggles and revel in their flaws, as these girls become strong women."
    },
    {
        name: "Fahrenheit 451, by Ray Bradbury",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/tumblr_nd4wnpO3ZS1tv8vcro1_r1_1280.jpg",
        desc: "Arguably one of the most influential fictional heroines of all time, Jane Eyre is a strong, unbroken women despite her troubled childhood and repressed Victorian society."
    },
    {
        name: "Animal Farm, by George Orwell",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/animal_farm_cover2014.jpg",
        desc: "This famous 1945 satire, examines the realistic risks of revolution and the dynamics animals will inevitably give in to."
    }, {
        name: "Gone with the Wind, by Margaret Mitchell",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/gone-with-the-wind.jpg",
        desc: "Set in The South during The Civil War, chances are if you love the movie you’ll love the book. Although the main character and the world she lives in is loathsome, readers’ opinions are twisted as this novel dishes out a fated justice when both Scarlett and The South lose their wars."
    }, {
        name: "The Catcher in the Rye, by J.D. Salinger",
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/97803167694881.jpg",
        desc: "Starring the original cynical adolescent, The Catcher In The Rye explores the challenges and isolation of adolescence. Decipher your own message as you follow sixteen-year-old Holden Caulfield, in this novel that has split audiences for decades."
    }
];
function seedDB() {
    Story.remove({}, function (err) {
        if (err) console.log(err);
        else {
            console.log("removed");
            data.forEach(function (stor) {
                Story.create(stor, function (err, story) {
                    if (err) console.log(err);
                    else {
                        console.log("added");
                    }
                });
            });
        }
    });
}
module.exports = seedDB;
// https://www.lifehack.org/articles/communication/30-books-that-everyone-should-read-least-once-their-lives.html