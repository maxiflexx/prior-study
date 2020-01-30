const express = require("express")
const router = new express.Router(); 
const dbHelper = require("../utils/dbHelper")

router.get('/', (req, res, next) => {
    dbHelper.query('SELECT * FROM my_contents', function(error, results, fields){
        if (error) throw error;

        res.status(200).json({
            resultCode: 1,
            resultMessage: "Success Get Users",
            resultValue: results
        });
    })
})

router.put('/', (req, res, next) => {
    dbHelper.query(`UPDATE my_contents SET Title='${req.body.title}', Contents='${req.body.contents}', Writer='${req.body.writer}', CreateDate='2020-01-19', ViewCount=0 WHERE ContentNo = '${req.body.contentNo}'`, 
        function(error, results, fields){
            if (error) throw error;
        
            res.status(200).json({
                resultCode: 1,
                resultMessage: "Success Put Users",
                resultValue: results
        });
    })
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    dbHelper.query(`INSERT INTO my_contents VALUES ('${req.body.contentNo}', '${req.body.title}', '${req.body.contents}', '${req.body.writer}', now(), 0)`,
        function(error, results, fields){
            if (error) throw error;
        
            res.status(200).json({
                resultCode: 1,
                resultMessage: "Success Post Users",
                resultValue: results
        });
    })
}),

router.delete('/', (req, res, next) => {
    dbHelper.query(`DELETE FROM my_contents WHERE contentNo='${req.body.contentNo}'`, function(error, results, fields){
    if (error) throw error;
    
    res.status(200).json({
        resultCode: 1,
        resultMessage: "Success Delete Users",
        resultValue: null
        });
    })
})


module.exports = router;