//crud

const getJournals = async (req,res) => {
    res.send ('get all Journals')
};

const getJournal = async (req,res) => {
    res.send ('get a Journal')
};

const createJournal = async (req,res) => {
    res.send (' create Journal')
};

const updateJournal = async (req,res) => {
    res.send ('update Journals')
};

const deleteJournal = async (req,res) => {
    res.send ('delete Journal')
};

module.exports = {
    getJournal, 
    getJournals, 
    createJournal, 
    deleteJournal, 
    updateJournal
};