import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1'

const supabaseUrl = 'https://udxfobmazbdosckrucgx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkeGZvYm1hemJkb3Nja3J1Y2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MjQ0NjAsImV4cCI6MTk5MjUwMDQ2MH0.ekNlVo0cNs14eeMUPf7i03rlruDHdDJhs6HVFgJNGP4'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let row = document.createElement('tr')
    row.innerHTML = `
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>${book.description}</td>
            `
    document.querySelector('#books tbody').appendChild(row)
  }
}

getBooks();