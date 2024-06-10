import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "../../../domain/models/LoginReponse";
import container from "../../../di/dependencies";
import { LoginUseCase } from "../../../domain/usecases/loginusecase";

const initialState: { data: LoginResponse | null; loading: 'idle' | 'pending' | 'fullfill' } = {
    data: null,
    loading: 'idle'
}

const login = createAsyncThunk('login', async() => {
    let loginUseCase = container.get<LoginUseCase>('LoginUseCase');
    return loginUseCase.login()
})

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                
            })
            .addCase(login.fulfilled, (state, action) => {
                // state.data = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                
            })
    }
})

export {login}
export default loginSlice.reducer