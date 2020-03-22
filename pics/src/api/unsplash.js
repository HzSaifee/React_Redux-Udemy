import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6fVbi6P6eJb57EJmOCHVCemhCbq2hHU5bQv2kwu4fzw'
  }
});
