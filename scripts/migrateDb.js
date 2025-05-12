// npx ts-node scripts/migrateDb.js
import mongoose, { Schema } from "mongoose"

const OLD_URI = "mongodb+srv://AliMalik:ALIMALIKALIMALIK1234@cluster0.pmz0ff9.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
const NEW_URI = "mongodb+srv://AliMalik:ALIMALIKALIMALIK1234@cluster0.pmz0ff9.mongodb.net/jabalbuilders?retryWrites=true&w=majority&appName=Cluster0"

const ProjectSchema = new Schema({}, { strict: false })
const TestimonialSchema = new Schema({}, { strict: false })
const UserSchema = new Schema({}, { strict: false })

async function migrate() {
  const oldConn = await mongoose.createConnection(OLD_URI).asPromise()
  const newConn = await mongoose.createConnection(NEW_URI).asPromise()

  const OldProject = oldConn.model("projects", ProjectSchema)
  const NewProject = newConn.model("projects", ProjectSchema)

  const OldTestimonial = oldConn.model("testimonials", TestimonialSchema)
  const NewTestimonial = newConn.model("testimonials", TestimonialSchema)

  const OldUser = oldConn.model("users", UserSchema)
  const NewUser = newConn.model("users", UserSchema)

  const projects = await OldProject.find()
  const testimonials = await OldTestimonial.find()
  const users = await OldUser.find()

  await NewProject.insertMany(projects)
  await NewTestimonial.insertMany(testimonials)
  await NewUser.insertMany(users)

  console.log("✅ Migration complete")

  await oldConn.close()
  await newConn.close()
}

migrate().catch(err => {
  console.error("❌ Migration failed:", err)
  process.exit(1)
})
