export const USER = {
  "image": { 
    "png": "./assets/avatars/image-juliusomo.png",
    "webp": "./assets/avatars/image-juliusomo.webp"
  },
  "username": "juliusomo"
}

export const COMMENTS = {
  p: {
    "id": 'p',
    "replies": [1, 2]
  },
  1: {
    "id": 1,
    "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "createdAt": "1 month ago",
    "score": 12,
    "user": {
      "image": { 
        "png": "./assets/avatars/image-amyrobson.png",
        "webp": "./assets/avatars/image-amyrobson.webp"
      },
      "username": "amyrobson"
    },
    "replies": []
  },
  2: {
    "id": 2,
    "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    "createdAt": "2 weeks ago",
    "score": 5,
    "user": {
      "image": { 
        "png": "./assets/avatars/image-maxblagun.png",
        "webp": "./assets/avatars/image-maxblagun.webp"
      },
      "username": "maxblagun"
    },
    "replies": [3, 4]
  },
  3: {
    "id": 3,
    "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    "createdAt": "1 week ago",
    "score": 4,
    "replyingTo": "maxblagun",
    "user": {
      "image": { 
        "png": "./assets/avatars/image-ramsesmiron.png",
        "webp": "./assets/avatars/image-ramsesmiron.webp"
      },
      "username": "ramsesmiron"
    },
    "replies": []
  },
  4: {
    "id": 4,
    "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    "createdAt": "2 days ago",
    "score": 2,
    "replyingTo": "ramsesmiron",
    "user": {
      "image": { 
        "png": "./assets/avatars/image-juliusomo.png",
        "webp": "./assets/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "replies": []
  }
}