'use strict';

const { Component, Fragment } = require('inferno');
const Index = require('./index');

module.exports = class extends Component {
    render() {
        const { page } = this.props;
        // TODO
        const helper = {};
        const { url_for, _p } = helper;

        return <Fragment>
            <div className="card">
                <div className="card-content">
                    <nav className="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href={url_for('/categories')}>{_p('common.category', Infinity)}</a></li>
                            {page.parents.map(category => {
                                return <li><a href={url_for(category.path)}>{category.name}</a></li>
                            })}
                            <li className="is-active"><a href="#" aria-current="page">{page.category}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Index {...this.props} />
        </Fragment>;
    }
}