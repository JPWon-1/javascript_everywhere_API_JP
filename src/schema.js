const { gql } = require('apollo-server-express');

//그래프 QL 스키마 언어로 스키마를 구성
module.exports = gql`
	scalar DateTime

	type Note {
		id: ID!
		content: String!
		author: User!
		createdAt: DateTime!
		updatedAt: DateTime!
		favoriteCount: Int!
		favoritedBy: [User!]
	}

	type NoteFeed{
		notes: [Note]!
		cursor: String!
		hasNextPage: Boolean!
	}

	type User {
		id: ID!
		username: String!
		email: String!
		avatar: String
		notes: [Note!]!
		favorites:[Note!]!
	}

	type History {
		id: ID!
		date: String!
		content: String
		source: String
	}

	type Query {
		notes: [Note!]!
		note(id: ID!): Note!
		user(username: String!): User
		users: [User!]!
		me: User!
		noteFeed(cursor: String): NoteFeed
		history(date:String!): [History]
		histories:[History!]
	}
	
	type Mutation {
		newNote(content: String!): Note!
		updateNote(id: ID!, content: String!):Note!
		deleteNote(id: ID!): Boolean!
		signUp(username: String!, email: String!, password: String!):String!
		signIn(email:String, password: String!): String!
		toggleFavorite(id: ID!): Note!
		newHistory(date: String!):History!
	}
`;