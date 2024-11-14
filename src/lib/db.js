//db.js

const {username , password} = process.env;

// mongodb+srv://akib7599:<db_password>@cluster0.cjwf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

export const connectionStr = "mongodb+srv://akib7599:MEGKuzPHfcl9Q1E5@cluster0.cjwf7.mongodb.net/next-project?retryWrites=true&w=majority&appName=Cluster0"

// export const connectionStr =  `mongodb+srv://${username}:${password}@cluster0.cjwf7.mongodb.net/next-project?retryWrites=true&w=majority&appName=Cluster0`
