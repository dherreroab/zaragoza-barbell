using zaragoza_barbell.Domain.Entities;

namespace zaragoza_barbell.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Mail> ContactMail { get; }
    DbSet<TodoList> TodoLists { get; }

    DbSet<TodoItem> TodoItems { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
