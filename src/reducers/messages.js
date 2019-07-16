const initialState = {
  data: [
    {
      id: "9333000183101",
      user: "Kate",
      avatar: "https://i.pravatar.cc/300?img=5",
      created_at: "2019-07-11 14:30:11",
      message: "Hey, guys! Have you seen the new episode of 'Stranger Things'?",
      marked_read: false
    },
    {
      id: "9333000183102",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-07-11 15:04:45",
      message: "Nay, not yet :-(",
      marked_read: false
    },
    {
      id: "9333000183103",
      user: "Taylor",
      avatar: "https://i.pravatar.cc/300?img=12",
      created_at: "2019-07-12 10:23:00",
      message: "I have! Let’s discuss it)",
      marked_read: false
    },
    {
      id: "9333000183104",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-07-12 10:24:32",
      message: "No spoilers!!! I will watch it asap.",
      marked_read: false
    },
    {
      id: "9333000183105",
      user: "Kim",
      avatar: "https://i.pravatar.cc/300?img=31",
      created_at: "2019-07-12 10:29:03",
      message: "Oh, Dave! But please, hurry up!",
      marked_read: false
    },
    {
      id: "9333000183106",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-07-12 10:34:47",
      message:
        "I have to finish my Academy task at Binary and afterwards I will watch it.",
      marked_read: false
    },
    {
      id: "9333000183107",
      user: "Kate",
      avatar: "https://i.pravatar.cc/300?img=5",
      created_at: "2019-07-12 10:35:19",
      message: "Oh, btw how do you like the Academy?",
      marked_read: false
    },
    {
      id: "9333000183108",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-07-12 10:35:57",
      message: "It’s quite tough but I like it.",
      marked_read: false
    },
    {
      id: "9333000183109",
      user: "Taylor",
      avatar: "https://i.pravatar.cc/300?img=12",
      created_at: "2019-07-12 10:37:50",
      message:
        "Alright, Dave. Work on your task and don’t you dare to be online here until you are ready with the Academy stuff!",
      marked_read: false
    },
    {
      id: "9333000183100",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-07-12 10:41:21",
      message: "cheers ;-)",
      marked_read: false
    }
  ],
  currentUser: {
    id: "1",
    user: "Sasha",
    avatar: "https://i.pravatar.cc/300?img=14"
  },
  isLoading: false
};

export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: state.currentUser.id,
            user: state.currentUser.user,
            avatar: state.currentUser.avatar,
            created_at: new Date()
              .toISOString()
              .split("T")
              .join(" ")
              .split(".")[0],
            message: action.payload,
            marked_read: false
          }
        ]
      };

    case "REMOVE_MESSAGE":
      return {
        ...state,
        data: state.data.filter(e => e.created_at !== action.payload)
      };

    case "LIKE_MESSAGE":
      return {
        ...state,
        data: state.data.map(data =>
          data.created_at === action.payload
            ? data.liked
              ? { ...data, liked: false }
              : { ...data, liked: true }
            : data
        )
      };

    default:
      return state;
  }
}
