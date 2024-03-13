import mongoose, { Schema } from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 1
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
  }, { collection: 'categories' });
  
  const Category = mongoose.model('Category', categorySchema);
  
  export default Category;