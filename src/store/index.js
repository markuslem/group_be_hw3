import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
        {
            "id": 1,
            "create-time": "2022-10-01",
            "author": "TrollLord",
            "profile-pic": require("@/assets/me.png"),
            "desc": "Hi everyone!!! I'm interested in playing basketball. 🏀 🏀 🏀 Does anyone know where are the nearest 🚀 basketball fields to the Delta building? It would be great to find a convenient spot to play regularly. Additionally, I'm looking to form a basketball friend group. If anyone is interested in joining, please let me know! We can organize some friendly matches and maybe even set up a regular schedule. All skill levels are welcome, so don't worry if you're just starting out or haven't played in a while.",
            "picture": null,
            "picture-info": null,
            "like-count": 89
        },
        {
            "id": 2,
            "create-time": "2022-10-01",
            "author": "SnipeZilla",
            "profile-pic": require("@/assets/me.png"),
            "desc": "You can play basketball in UT sports hall.",
            "picture": null,
            "picture-info": null,
            "like-count": 44
        },
        {
            "id": 3,
            "create-time": "2022-10-02",
            "author": "markus123",
            "profile-pic": require("@/assets/me.png"),
            "desc": "Anyone knows in which room is the lab today?",
            "picture": null,
            "picture-info": null,
            "like-count": 10
        },
        {
            "id": 4,
            "create-time": "2023-10-22",
            "author": "markusL",
            "profile-pic": require("@/assets/me.png"),
            "desc": null,
            "picture": require("@/assets/town-square.jpg"),
            "picture-info": "Tartu, 2022",
            "like-count": 1
        },
        {
            "id": 5,
            "create-time": "2024-06-22",
            "author": "kristjas",
            "profile-pic": require("@/assets/me.png"),
            "desc": "What's the name of this event?",
            "picture": require("@/assets/song-festival.jpg"),
            "picture-info": "Tartu, 2024",
            "like-count": 218
        },
        {
            "id": 6,
            "create-time": "2024-08-20",
            "author": "markus123",
            "profile-pic": require("@/assets/me.png"),
            "desc": "This is the Delta building where we are studying.",
            "picture": require("@/assets/delta.jpg"),
            "picture-info": "Tartu, 2020",
            "like-count": 746
        },
        {
            "id": 7,
            "create-time": "2024-09-12",
            "author": "RageQuitter",
            "profile-pic": require("@/assets/me.png"),
            "desc": "Anyone else having trouble with dormitory wifi in Narva mnt 89?",
            "picture": null,
            "picture-info": null,
            "like-count": 30
        },
        {
            "id": 8,
            "create-time": "2024-09-29",
            "author": "NoobMaster69",
            "profile-pic": require("@/assets/me.png"),
            "desc": "I'm struggling with discrete mathematics course. If anyone could explain some things about graph theory, I could use some help.",
            "picture": null,
            "picture-info": null,
            "like-count": 8
        },
        {
            "id": 9,
            "create-time": "2024-09-29",
            "author": "markus123",
            "profile-pic": require("@/assets/me.png"),
            "desc": "Hi NoobMaster69! I'd be happy to help you with graph theory. Let's meet tomorrow in school.",
            "picture": null,
            "picture-info": null,
            "like-count": 293
        },
        {
            "id": 10,
            "create-time": "2024-10-31",
            "author": "ScoopyScareMasterOfTheDarknessAndBoom",
            "profile-pic":  require("@/assets/me.png"),
            "desc": "Trick or treat?! :O",
            "picture": null,
            "picture-info": null,
            "like-count": 0
        }
    ]
  },
  
  getters: {
    postgetter: (state) => {
      return state.posts.map((post) => {
        return {
          id: post.id,
          'create-time': post['create-time'], 
          author: post.author,
          'profile-pic': post['profile-pic'],
          desc: post.desc,
          picture: post.picture,
          'picture-info': post['picture-info'],
          'like-count': post['like-count'], 
        };
      });
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
