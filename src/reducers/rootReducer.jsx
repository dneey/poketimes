const initState = {
  posts: [
    {
      id: '1',
      title: 'Charmander evolved to Charmeleon!',
      body: 'Lorem Ipsum body text'
    },
    {
      id: '2',
      title: 'Charmeleon evolved to Charizard!!',
      body: 'Lorem Ipsum body text'
    },
    { id: '3', title: 'Lets Go!', body: 'Lorem Ipsum body text' }
  ]
};
const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
