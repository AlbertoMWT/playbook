
    //GitHub
const repo = {
    name: "LaunchX",
    author: "Carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`;
    },
};

// console.log("Nombre del repo:" + repo.name);
// console.log("Issues totales: " + repo.getTotalIssues());
// console.log(repo.getGeneralInfo());

const issue = {
    title: "New issue",
    repositoryNameAssociated: "LaunchX",
    status: "active",
    numberOfComments: 9,
    labels: ["issue", "new issue"],
    author: "AlbertoMWT",
    dateCreate: "15/04/2022",
    lastUpdate: "15/04/2022",
    getTitleAndAuthor: function () {
        return `issue "${this.title}" created by ${this.author}`;
    },
    getGeneralInfo: function () {
        return `Created at ${this.dateCreate}, last update was at ${this.lastUpdate}`;
    },
};

// console.log(issue.getTitleAndAuthor())
// console.log(issue.getGeneralInfo())

const pullRequest = {
    title: "New Pull Request",
    banchName: "NewBranch",
    dateCreated: "15/04/2022",
    status: "pending",
    repositoryNameAssociated: "LaunchX",

    getStatus: function () {
        return `Status ${this.status}`;
    },
    getTitleAndAuthor: function () {
        return `pull request "${this.title}" created by ${issue.author}`;
    },
};

// console.log(pullRequest.getStatus())
// console.log(pullRequest.getTitleAndAuthor())


    //Twitter
const ttuser = {
    user: 'Alberto',
    username: 'AlbertoMWT',
    bio: 'Web Developer Fullstack',
    age: 28,
    email: 'alberto.mwt@gmail.com',

    getUserName:function(){
        return(`${this.username} is the twitter owner`)
    },
    getEmail:function(){
        return(`your email is ${this.email}`)
    }
}

// console.log(user.getUserName())
// console.log(user.getEmail())

const trendingTopic = {
    name: 'Jonny Depp Judgment',
    hashTags: ['Amber Heard', 'will smith', 'jonny deep'],

    getTrendingName:function(){
        return(`the trending toppic name is "${this.name}"`)
    }
}

// console.log(trendingTopic.getTrendingName())

const hashtag = {
    hashtagTop: 'jonny deep', 
    hashtagBottom: 'Amber Heard' 
}


    //Facebook
const fbuser = {
    user: 'Alberto',
    email: 'alberto.mwt@gmail.com',
    username: 'AlbertoMWT',
    password: '*******',
    age: 28,
    bio: 'Just for fun',

    getUserAndEmail:function(){
        return (`username is ${this.username} and his/her email is ${this.email}`)
    }
}

// console.log(fbuser.getUserAndEmail())

const post = {
    user: 'AlbertoMWT',
    to: 'CarloGuido',
    post: 'Excelent Sherpa! you are the best',
    date: '15/04/2022',

    getPost:function(){
        return (` "${this.post}", created by ${this.user} to ${this.to} `)
    }
}

// console.log(post.getPost())

const biography = {
    user: 'AlbertoMWT',
    date: '15/04/2022',
    data: 'This is my biography',

    getBiography:function(){
        return (`${ this.data } from ${this.user} `)
    } 
}

// console.log(biography.getBiography())

    //Uber
const profile = {
    name: 'Alberto',
    userName: 'AlbertoMWT',
    password: '*******',
    addres: 'av. del fuerte #81',
    city: 'Coatzacoalcos',

    user(){
        return (` ${this.userName} from ${this.city} `)
    }
}

// console.log(profile.user())

const travel = {
    from: 'Coatza',
    to: 'CMDX',
    budget: 5000,

    getTravel(){
        return (`travel from ${this.from} to ${this.to}`)
    }
}

// console.log(travel.getTravel())