const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email:"Dev@gmail.com"
        },
    },
};

const extractedData = ({data}) => {
    const {title, author} = data;
    const {name: authorName, email: authorEmail} = author;
    console.log(`Title: ${title}`);
    console.log(`Author Object: ${author}`);
    console.log(`Author Name: ${authorName}`);
    console.log(`Author Email: ${authorEmail}`);
    // console.log("Author Object:", author);
    
};

extractedData(response);
