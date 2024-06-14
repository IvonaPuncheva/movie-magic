const movies = [{
     title: 'fbfd',
genre: 'dd',
director: 'ee',
date: '2019',
imageUrl: '/img/jungle-cruise.jpeg',
rating: '3',
description: 'ef'
}];

exports.getAll =() =>{
  return movies.slice();
};


exports.create = (movieData) =>{
  movies.push(movieData);
    
};