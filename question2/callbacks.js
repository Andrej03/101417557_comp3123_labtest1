
// resolvePromise()
const resolvePromise = () => {
    Promise.resolve().then(() => {
        setTimeout(() => {
            console.log("message: 'Promise Resolved'")
        }, 500)
    })
    
}

// rejectPromise()
// example adapted for mdn refernece link 
const rejectPromise = () => {
    Promise.reject().catch(() => {
        setTimeout(() => {
            console.log("error: 'Promise Rejected'")
        }, 500)
    })
}

resolvePromise()
rejectPromise()
