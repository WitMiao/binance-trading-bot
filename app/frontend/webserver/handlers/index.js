const { handleAuth } = require('./auth');
const { handleGridTradeArchiveGet } = require('./grid-trade-archive-get');
const { handleGridTradeArchiveDelete } = require('./grid-trade-archive-delete');
const { handleClosedTradesSetPeriod } = require('./closed-trades-set-period');
const { handleGridTradeLogsGet } = require('./grid-trade-logs-get');
const { handleGridTradeLogsExport } = require('./grid-trade-logs-export');
const { handle404 } = require('./404');
const { handleStatus } = require('./status');
const { handleSymbolDelete } = require('./symbol-delete');

const setHandlers = async (logger, app, { loginLimiter }) => {
  await handleAuth(logger, app, { loginLimiter });
  await handleGridTradeArchiveGet(logger, app);
  await handleGridTradeArchiveDelete(logger, app);
  await handleClosedTradesSetPeriod(logger, app);
  await handleGridTradeLogsGet(logger, app);
  await handleGridTradeLogsExport(logger, app);
  await handleStatus(logger, app);
  await handle404(logger, app);
  await handleSymbolDelete(logger, app);
};

module.exports = {
  setHandlers
};
