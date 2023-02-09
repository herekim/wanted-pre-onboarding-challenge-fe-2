interface CreateTodo {
  title: string
  content: string
}

interface UpdateTodo {
  title: string
  content: string
  done: boolean
  category: string
  tags: string[]
}

interface GetTodos {}

interface GetTodo {
  id: number
}

interface DeleteTodo {
  id: number
}

/**
 * @description 할 일 생성
 * @param {string} title
 * @param {string} content
 * @returns {object} id, title, done, category, tags
 */
const createTodo = ({ title, content }: CreateTodo) => {}

/**
 * @description 할 일 수정
 * @param {number} id
 * @param {string} title
 * @param {boolean} done
 * @param {string} category
 * @param {array} tags
 * @returns {object} id, title, done, category, tags
 */
const updateTodo = ({ title, content, done, category, tags }: UpdateTodo) => {}

/**
 * @description 모든 할 일 불러오기
 * @return {array} All todo list
 */
const getTodos = () => {}

/**
 * @description 할 일 불러오기
 * @param {number} id
 * @return {object} id, title, done, category, tags
 */
const getTodo = ({ id }: GetTodo) => {}

/**
 * @description 할 일 삭제하기
 * @param {number} id
 * @returns {object} id, title, done, category, tags
 */
const deleteTodo = ({ id }: DeleteTodo) => {}
