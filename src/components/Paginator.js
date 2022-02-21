/** @jsxImportSource theme-ui */

const Paginator = ({ totalPages, selectedPage, clickOnPage }) => {
  const pageStyles = {
    display: "block",
    padding: "0 20px",
    float: "left",
    transition: "400ms ease",
    color: "#595959",
    fontsize: "20px",
    letterSpacing: "0.1em",
    lineHeight: "70px",
    border: 0,
  };

  const isPreviousEnabled = selectedPage !== 1;
  const isNextEnabled = selectedPage !== totalPages;

  const getPagesArray = () => {
    const array = [];
    if (totalPages >= 2) {
      array.push(1);
    }
    array.push(
      selectedPage === 1
        ? 2
        : selectedPage === totalPages && totalPages >= 3
        ? totalPages - 1
        : selectedPage
    );
    if (totalPages >= 3) {
      array.push(totalPages);
    }
    return array;
  };

  const handleClickPrevious = () => {
    if (isPreviousEnabled) {
      clickOnPage(selectedPage - 1);
    }
  };

  const handleClickNext = () => {
    if (isNextEnabled) {
      clickOnPage(selectedPage + 1);
    }
  };
  return (
    <div
      data-testid="paginator-container"
      sx={{ textAlign: "center", width: "90%" }}
    >
      <div
        data-testid="paginator-inner-container"
        sx={{
          display: "inline-block",
          height: "75px",
          padding: "0 25px",
          borderRadius: "35px",
          backgroundColor: "#eee",
        }}
      >
        <button
          data-testid="previous-container"
          onClick={() => handleClickPrevious()}
          sx={{ ...pageStyles, opacity: isPreviousEnabled ? 1 : 0.5 }}
        >
          prev
        </button>
        {getPagesArray().map((page) => (
          <button
            key={page}
            onClick={() => clickOnPage(page)}
            sx={{
              ...pageStyles,
              backgroundColor: page === selectedPage ? "#ff6801" : "#eee",
            }}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handleClickNext()}
          sx={{ ...pageStyles, opacity: isNextEnabled ? 1 : 0.5 }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Paginator;
