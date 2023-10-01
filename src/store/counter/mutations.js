
export const increment = (state) => {
    state.count++
    state.list.push(state.count)
}
export const decrement =(state) => {
      state.count--
      state.list.pop()
}
export const incrementBy = (state, payload) =>{
      state.count += payload
      state.list.push(state.count)
}