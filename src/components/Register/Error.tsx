import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function Error({ message }: { message: string }) {
    return (
        message && <div className="error text-red-600 text-lg flex items-center mt-2">
            <ErrorOutlineIcon color="error" className="mr-2" />{message}
        </div>
    )
}

export default Error