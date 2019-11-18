import indexRouter from '../controllers/Index/IndexRoute';
import usersRouter from '../controllers/Users/UsersRoute';

export function consolidateRoutes(app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
}