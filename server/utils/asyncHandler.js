export const asyncHandler = (fu) => async () => {
  try {
    fu(req, res, next)
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    })
  }
}